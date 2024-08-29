import { useState } from 'react'
import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
dayjs.extend(isToday)

export const useDate = () => {
  const [date, setDate] = useState(new Date())
  const [visible, setVisible] = useState(false)
  const dayjsDate = dayjs(date)
  const dateText = dayjsDate.isToday() ? '今天' : dayjsDate.format('YYYY/MM/DD')

  const onShowDate = () => setVisible(true)
  const onHideDate = () => setVisible(false)
  const onDateChange = val => setDate(val)

  return {
    date: dayjsDate,
    dateText,
    visible,
    onShowDate,
    onHideDate,
    onDateChange,
  }
}
