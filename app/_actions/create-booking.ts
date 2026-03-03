"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"

interface CreateBookingParams {
  serviceId: string
  date: Date
}

export const createBooking = async (params: CreateBookingParams) => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return {
      error: "Usuário não autenticado",
    }
  }

  await db.booking.create({
    data: { ...params, userId: (session as any)?.user?.id },
  })
  revalidatePath("/barbershops/[id]")
}
