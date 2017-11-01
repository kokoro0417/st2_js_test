package com.internousdev.JsTest.action;

import java.util.ArrayList;

import com.internousdev.JsTest.dto.DataDTO;
import com.opensymphony.xwork2.ActionSupport;

public class SelectAction extends ActionSupport{

	private String AreaChoice ="";
	private String buy_seat = "";
	private String[] TextAry;
	public ArrayList<DataDTO> aryList = new ArrayList<DataDTO>();

	public String execute(){
		String ret = ERROR;

		if(AreaChoice.length()>1){
			TextAry = AreaChoice.split(",");

			int count=0;
			while(count<TextAry.length){
				DataDTO DDTO = new DataDTO();
				DDTO.setAreaChoice(TextAry[count]);
				aryList.add(DDTO);
				count++;
			}
			ret = SUCCESS;
		}
		return ret;
	}


	public String[] getTextAry() {
		return TextAry;
	}

	public void setTextAry(String[] textAry) {
		TextAry = textAry;
	}


	public String getAreaChoice() {
		return AreaChoice;
	}


	public void setAreaChoice(String areaChoice) {
		AreaChoice = areaChoice;
	}


	public String getBuy_seat() {
		return buy_seat;
	}


	public void setBuy_seat(String buy_seat) {
		this.buy_seat = buy_seat;
	}



}
