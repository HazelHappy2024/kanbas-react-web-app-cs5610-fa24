const multiply = (a: number, b: number) => a * b;

export default function ImpliedReturn() {
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive); // 控制台输出，用于调试

  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive}<br />
      multiply(4, 5) = {multiply(4, 5)}
      <hr />
    </div>
  );
}
