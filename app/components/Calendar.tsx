const Calendar = () => {
    const date = new Date()
    const today = date.getDate()
    const weekDay = date.getDay()
    const month = date.getMonth()
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    
  return (
    <div className="flex flex-col justify-center items-center w-[40vw] bg-base-300 px-2 rounded">
        <h1>{months[month-1]}</h1>
    <div className="flex flex-row justify-between w-[40vw] bg-base-300 px-2 rounded">
        
        <div className="flex flex-col items-center">
            <h1>Lunes</h1>
            <p>{today}</p>
            <p>{weekDay}</p>
            </div>
            <div className="flex flex-col">
            <h1>Martes</h1>
            <p>{today}</p>
            <p>{weekDay}</p>
            </div>
            <div className="flex flex-col">
            <h1>Miercoles</h1>
            <p>{today}</p>
            <p>{weekDay}</p>
            </div>
            <div className="flex flex-col">
            <h1>Jueves</h1>
            <p>{today}</p>
            <p>{weekDay}</p>
            </div>
            <div className="flex flex-col">
            <h1>Viernes</h1>
            <p>{today}</p>
            <p>{weekDay}</p>
            </div>

    </div>
    </div>
  )
}

export default Calendar