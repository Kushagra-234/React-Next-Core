// response contract define kro and design kro

// /api/users?page=2&sort=name&order=asc

// /api/users?page=2&sort=name&order=asc

// const res = {
//   data: [...],
//   total: 1000,
//   page: 2,
//   pageSize: 20,
// };

// // if pagination implemented on backend
// const res2 = {
//     "data":[...],
//     total:1000,
//     page:2,
//     pageSize:20
// }

// {
//     data:[...],
//     total:1000,
//     page:2
// }

// generic table
const dataTableResponse = {
  columns: [{ key: String, name: String }],

  data: [{ name: String, id: String, status: string }],
};

columns.map((items) => {
  return items.key;
});

function retYu() {
  return (
    <table>
      <thead>
        <tr>
          {table.columns.map((item) => {
            return item.ksy;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {table.data.map((row) => {
            return <td></td>;
          })}
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
