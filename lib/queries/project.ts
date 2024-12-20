import connection from '@/lib/database';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { Project } from '@/lib/types';

export const findProjectById = async (id: number): Promise<Project | null> => {
  try {
    console.log('Id recebido para consulta SQL: ', id);
    const conn = await connection();
    console.log('Conexão estabelecida com o banco de dados');
    
    const query = 'SELECT * FROM projeto WHERE proj_id = ?';
    console.log('Query gerada: ', query, [id]);
    
    const [rows]: [RowDataPacket[], FieldPacket[]] = await conn.query(query, [id]);
    conn.end();
    
    if (!rows.length) {
      console.log('Nenhum projeto encontrado com o id ', id);
      return null;
    }
    const result = rows[0] as Project;
    console.log('Resultado da consulta:', result);
    return result;
  } catch (error) {
    console.error('Erro na função selectById:', error);
    throw error;
  }
};

export const findAllProjects = async (): Promise<Project[] | null> => {
  try {
    const conn = await connection();
    console.log('Conexão estabelecida com o banco de dados');
    
    const query = 'SELECT * FROM projeto';
    console.log('Query gerada: ', query);
    
    const [rows]: [RowDataPacket[], FieldPacket[]] = await conn.query(query);
    conn.end();
    
    if (!rows.length) {
      console.log('Nenhum projeto encontrado com o id ');
      return null;
    }
    const result = rows as Project[];
    console.log('Resultado da consulta:', result);
    return result;
  } catch (error) {
    console.error('Erro na função selectById:', error);
    throw error;
  }
}