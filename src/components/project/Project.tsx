import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Column } from "@devexpress/dx-react-grid";
import {
   Grid,
   Table,
   TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { generateRows } from "./generate";

// interface IRow {
//    name: string;
//    gender: string;
//    city: string;
//    car: string;
// }

const rows = generateRows({ length: 5 });
const columns: Column[] = [
   { name: "name", title: "Name" },
   { name: "gender", title: "Gender" },
   { name: "city", title: "City" },
   { name: "car", title: "Car" },
];
const tableColumnExtensions: Table.ColumnExtension[] = [
   { columnName: "gender", width: 100 },
];

const Demo: React.SFC = () => {
   return (
      <Paper>
         <Grid rows={rows} columns={columns}>
            <Table columnExtensions={tableColumnExtensions} />
            <TableHeaderRow />
         </Grid>
      </Paper>
   );
};

export default Demo;
