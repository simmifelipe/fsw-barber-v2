"use server"

import { endOfDay, startOfDay } from "date-fns"
import { db } from "../_lib/prisma"

interface GetBookingsProps {
  userId: string
  date: Date
}

export const getBookings = async ({ userId, date }: GetBookingsProps) => {
  return db.booking.findMany({
    where: {
      date: {
        gte: startOfDay(date),
        lte: endOfDay(date),
      },
      userId,
    },
  })
}
