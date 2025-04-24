import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: NextRequest, { params }: { params: { no: string } }) {
  const user = await prisma.user.findUnique({ where: { no : Number(params.no) } });

  if (!user) return NextResponse.json({ message: 'Not found' }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(req: NextRequest, { params }: { params: { no: string } }) {
  const { id, pwd } = await req.json();

  const updated = await prisma.user.update({
    where: { no: Number(params.no) },
    data: { id, pwd },
  });

  return NextResponse.json(updated);
}

// PATCH: 일부 필드만 수정할 수 있게 구현
export async function PATCH(req: NextRequest, { params }: { params: { no: string } }) {
  const { id, pwd }: { id?: string; pwd?: boolean } = await req.json();

  // 업데이트할 필드만 조건부로 구성
  const updateData: Record<string, any> = {};
  if (id !== undefined) updateData.id = id;
  if (pwd !== undefined) updateData.pwd = pwd;

  // 아무 필드도 없으면 에러 응답
  if (Object.keys(updateData).length === 0) {
    return NextResponse.json({ message: 'No fields to update' }, { status: 400 });
  }

  try {
    const updated = await prisma.user.update({
      where: { no: Number(params.no) },
      data: updateData,
    });

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ message: 'Todo not found or update failed' }, { status: 404 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { no: string } }) {
  const deleted = await prisma.todo.delete({ where: { id: Number(params.no) } });
  return NextResponse.json({ message: 'Deleted', deleted });
}
