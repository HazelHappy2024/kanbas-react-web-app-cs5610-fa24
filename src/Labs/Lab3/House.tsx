export default function House() {
    // 定义一个 house 对象
    const house = {
      bedrooms: 4,
      bathrooms: 2.5,
      squareFeet: 2000,
      address: {
        street: "Via Roma",
        city: "Roma",
        state: "RM",
        zip: "00100",
        country: "Italy",
      },
      owners: ["Alice", "Bob"],
    };
  
    return (
      <div id="wd-house">
        <h4>House</h4>
        <h5>bedrooms</h5>
        {house.bedrooms}
        <h5>bathrooms</h5>
        {house.bathrooms}
        <h5>Data</h5>
        {/* 使用 JSON.stringify 将对象转换为格式化的 JSON 字符串 */}
        <pre>{JSON.stringify(house, null, 2)}</pre>
        <hr />
      </div>
    );
  }
  