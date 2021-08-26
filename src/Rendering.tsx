import React from 'react'
import { Calendar, Views,momentLocalizer  } from 'react-big-calendar'
import events from './events'
import moment from 'moment'


const localizer = momentLocalizer(moment)

function Event({ event }:any) {
  return (
    <div>
      <strong>
        TESTING EVENTS
        <button onClick={()=>alert("DELETE")}>DELETE</button>
      </strong>
      <strong>
        TESTING EVENTS
        <button onClick={()=>alert("DELETE")}>DELETE</button>
      </strong>
      <strong>
        TESTING EVENTS
        <button onClick={()=>alert("DELETE")}>DELETE</button>
      </strong>
      <strong>
        TESTING EVENTS
        <button onClick={()=>alert("DELETE")}>DELETE</button>
      </strong>
      <strong>
        TESTING EVENTS
        <button onClick={()=>alert("DELETE")}>DELETE</button>
      </strong>
    </div>
  )
}

function EventAgenda({ event }:any) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  )
}

const customDayPropGetter = (date:any) => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
      style: {
        border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
      },
    }
  else return {}
}

const customSlotPropGetter = (date:any) => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
    }
  else return {}
}

let Rendering = () => (
  <Calendar
    events={events}
    localizer={localizer}
    defaultDate={new Date(2015, 3, 1)}
    defaultView={Views.DAY}
    dayPropGetter={customDayPropGetter}
    slotPropGetter={customSlotPropGetter}
    components={{
      event: Event,
      agenda: {
        event: EventAgenda,
      },
    }}
  />
)

export default Rendering