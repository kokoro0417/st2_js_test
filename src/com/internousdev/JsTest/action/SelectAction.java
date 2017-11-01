package com.internousdev.JsTest.action;

import java.util.ArrayList;

import com.internousdev.JsTest.dto.DataDTO;
import com.opensymphony.xwork2.ActionSupport;

public class SelectAction extends ActionSupport{

	private String AreaChoice ="";
	private String[] TextAry;
	public ArrayList<DataDTO> aryList = new ArrayList<DataDTO>();

	public String execute(){

		if(AreaChoice.length()>1){
			TextAry = AreaChoice.split(",");

			int count=0;
			while(count<TextAry.length){
				DataDTO DDTO = new DataDTO();
				DDTO.setAreaChoice(TextAry[count]);
				aryList.add(DDTO);
				count++;
			}
		}
		return SUCCESS;
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



}
