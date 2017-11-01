package com.internousdev.JsTest.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.internousdev.JsTest.dto.DataDTO;
import com.internousdev.JsTest.util.DBConnector;
import com.opensymphony.xwork2.ActionSupport;

public class SearchDAO extends ActionSupport{

	public ArrayList<DataDTO> Search() throws SQLException{
		ArrayList<DataDTO> aryDTO = new ArrayList<DataDTO>();

		DBConnector db = new DBConnector();
		Connection con = db.getConnection();
		String sql ="SELECT * FROM buy_seat_list";

		try{
			PreparedStatement ps = con.prepareStatement(sql);
//			ps.setString(1, x);

			ResultSet rs = ps.executeQuery();

			while(rs.next()){
				DataDTO DDTO = new DataDTO();
				DDTO.setAreaChoice(rs.getString("buy_seat_id"));
				aryDTO.add(DDTO);

			}

		}catch(Exception e){
			e.printStackTrace();
		}
		try{
			con.close();
		}catch(Exception e){
			e.printStackTrace();
		}

		return aryDTO;
	}

}
