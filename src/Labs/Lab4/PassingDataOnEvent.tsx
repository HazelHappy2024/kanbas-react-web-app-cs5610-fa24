
const add = (a: number, b: number) => {
    alert(`$a + $b = ${a + b}`);
};

// Component PassingDataOnEvent
export default function PassingDataOnEvent() {
    return (
        <div id="wd-passing-data-on-event">
            <h2>Passing Data on Event</h2>
            
            
            <button 
                onClick={() => add(2, 3)} // 将函数包装在闭包中
                className="btn btn-primary"
                id="wd-pass-data-click"
            >
                Pass 2 and 3 to add()
            </button>
            
            <hr/>
        </div>
    );
}
