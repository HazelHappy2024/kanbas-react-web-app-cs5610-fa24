const hello = () => {
    alert("Hello World!");
};


const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};

export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>

            <button onClick={hello} id="wd-hello-world-click">
                Hello World!
            </button>
            {/* 第一个按钮，点击时直接调用 hello 函数 */}

            <button onClick={() => lifeIs("Good")} id="wd-life-is-good-click">
                Life is Good!
            </button>
            

            <button onClick={() => {
                hello();
                lifeIs("Great!");
            }} id="wd-life-is-great-click">
                Life is Great!
            </button>
            

            <hr />
        </div>
    );
}



