import connection from '@/lib/database';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { Certificate } from '@/lib/types';

export const findCertificateById = async (id: number): Promise<Certificate | null> => {
  try {
    console.log('Id recebido para consulta SQL: ', id);
    const conn = await connection();
    console.log('Conexão estabelecida com o banco de dados');
    
    const query = 'SELECT * FROM certificado WHERE cert_id = ?';
    console.log('Query gerada: ', query, [id]);
    
    const [rows]: [RowDataPacket[], FieldPacket[]] = await conn.query(query, [id]);
    conn.end();
    
    if (!rows.length) {
      console.log('Nenhum projeto encontrado com o id ', id);
      return null;
    }
    const result = rows[0] as Certificate;
    console.log('Resultado da consulta:', result);
    return result;
  } catch (error) {
    console.error('Erro na função selectById:', error);
    throw error;
  }
};

export const findAllCertificates = async (): Promise<Certificate[] | null> => {
  try {
    const conn = await connection();
    console.log('Conexão estabelecida com o banco de dados');
    
    const query = 'SELECT * FROM certificado';
    console.log('Query gerada: ', query);
    
    const [rows]: [RowDataPacket[], FieldPacket[]] = await conn.query(query);
    conn.end();
    
    if (!rows.length) {
      console.log('Nenhum projeto encontrado com o id ');
      return null;
    }
    const result = rows as Certificate[];
    console.log('Resultado da consulta:', result);
    return result;
  } catch (error) {
    console.error('Erro na função selectById:', error);
    throw error;
  }
}