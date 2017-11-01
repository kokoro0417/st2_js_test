package com.internousdev.JsTest.action;

import com.opensymphony.xwork2.ActionSupport;

public class LoginAction  extends ActionSupport{

	private String buy_seat = "";

	public String execute(){
		return SUCCESS;
	}

	public String getBuy_seat() {
		return buy_seat;
	}

	public void setBuy_seat(String buy_seat) {
		this.buy_seat = buy_seat;
	}

}