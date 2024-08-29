import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import dayjs from 'dayjs'

import { getBills } from '@/store/slices/ka'

export const useBillList = () => {
  const dispatch = useDispatch()
  const { billList } = useSelector(state => state.ka)

  useEffect(() => {
    dispatch(getBills())
  }, [dispatch])

  return { billList }
}

export const useYearBillList = selectedYear => {
  const { billList } = useBillList()
  const yearBills = useMemo(
    () =>
      billList.filter(item => selectedYear === dayjs(item.date).get('year')),
    [billList, selectedYear]
  )

  return yearBills
}

export const useMonthBillList = (selectedYear, selectedMonth) => {
  const selectedYearBills = useYearBillList(selectedYear)
  const currentBillList = useMemo(
    () =>
      selectedYearBills.filter(item => {
        return selectedMonth === dayjs(item.date).get('month')
      }),
    [selectedYearBills, selectedMonth]
  )

  return currentBillList
}
