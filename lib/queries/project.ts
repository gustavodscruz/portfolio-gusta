import connection from "@/lib/database";
import { FieldPacket, RowDataPacket } from "mysql2";
import sql from "sql-bricks";
import { Project } from "@/lib/types";

export const selectById = async (id: number) => {
  const conn = await connection();
  const query = sql.select('*').from('projeto').where({ proj_id: id });
  const { text, values } = query.toParams();
  const [rows]: [RowDataPacket[], FieldPacket[]] = await conn.query(text, values);
  conn.end();
  if (!rows.length) {
    return null;
  }
  return rows[0] as Project;
}