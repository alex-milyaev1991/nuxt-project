import moment from 'moment'

export const representNumberInDollars = (number) => {
  const dollarFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return `${dollarFormatter.format(+number)}`
}

function getAbsoluteMonths(momentDate) {
  const months = Number(momentDate.format('MM'))
  const years = Number(momentDate.format('YYYY'))
  return months + years * 12
}

export const getMonthDif = (startDate, endDate) => {
  const startMonths = getAbsoluteMonths(startDate)
  const endMonths = getAbsoluteMonths(endDate)

  return endMonths - startMonths
}

// helper functions for quiz history charts

export const transformSeries = (inSeries) => {
  if (!inSeries.length) {
    return [
      {
        name: 'Empty Score',
        data: [],
      },
    ]
  }
  const series = sortBySoonest(inSeries)
  return [
    {
      name: 'Score',
      data: series.map((item) => {
        return {
          x: item.completedAt,
          y: item.totalScore,
        }
      }),
    },
  ]
}

export const sortBySoonest = function (events) {
  return events.sort((a, b) =>
    moment(a.completedAt).diff(moment(b.completedAt))
  )
}

export const formatToShortDate = (date) => {
  return moment(date).format("MMM. 'YY")
}

export const getMonths = (series, isShowThree) => {
  const transformDates = series[0].data.map((d) => {
    const momentDate = moment(d.x).format('MMMM YYYY')
    return momentDate
  })

  const unique = [...new Set(transformDates)]

  const firstDate = unique[0]
  const middleDate = unique[Math.floor(unique.length / 2)]
  const lastDate = unique[unique.length - 1]

  const displayedMonths = [firstDate, middleDate, lastDate]
  const uniqueMonths = [...new Set(displayedMonths)]

  if (isShowThree) {
    return [uniqueMonths]
  }

  if (uniqueMonths.length === 3) {
    return [
      formatToShortDate(uniqueMonths[0]),
      uniqueMonths[1],
      formatToShortDate(uniqueMonths[2]),
    ]
  } else {
    return uniqueMonths
  }
}

export const manipulateSeries = (series, isOneMonth = false) => {
  let manipulateSeriesData = []
  let displayMonths = []

  const currentMonths = getMonths(series)
  const data = series[0].data
  let chartType = data.length === 1 ? 'area' : 'line'

  if (data.length > 0) {
    const startOfMonth = moment(data[0].x).startOf('month').format()
    const endOfMonth = moment(data[data.length - 1].x)
      .endOf('month')
      .format()

    let refinedData = [
      {
        name: 'Score',
        data: [
          {
            x: startOfMonth,
            y: null,
          },
          ...data,
          {
            x: endOfMonth,
            y: null,
          },
        ],
      },
    ]

    if (currentMonths.length === 1) {
      const momentStartOfMonth = moment(startOfMonth)
      const momentEndOfMonth = moment(endOfMonth)
      const previousMonth = moment(
        momentStartOfMonth.subtract(2, 'days')
      ).format()
      const nextMonth = moment(momentEndOfMonth.add(2, 'days')).format()

      if (isOneMonth) {
        refinedData = [
          {
            name: 'Score',
            data: [
              // {
              //   x: startOfMonth,
              //   y: null,
              // },
              ...data,
              {
                x: endOfMonth,
                y: null,
              },
            ],
          },
        ]
        manipulateSeriesData = refinedData
        displayMonths = getMonths(refinedData)
      } else {
        const refinedDataForMonths = [
          {
            name: 'Score',
            data: [
              {
                x: previousMonth,
                y: null,
              },
              // {
              //   x: startOfMonth,
              //   y: null,
              // },
              ...data,
              {
                x: endOfMonth,
                y: null,
              },
              {
                x: nextMonth,
                y: null,
              },
            ],
          },
        ]

        refinedData = [
          {
            name: 'Score',
            data: [
              ...data,
              {
                x: endOfMonth,
                y: null,
              },
            ],
          },
        ]

        displayMonths = getMonths(refinedDataForMonths)
        manipulateSeriesData = refinedData
      }
    } else {
      displayMonths = currentMonths
    }

    manipulateSeriesData = refinedData

    return {
      chartType,
      manipulateSeriesData,
      displayMonths,
    }
  } else {
    return {
      chartType,
      manipulateSeriesData,
      displayMonths,
    }
  }
}
