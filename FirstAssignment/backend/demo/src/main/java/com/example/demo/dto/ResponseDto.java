package com.example.demo.dto;

import java.io.Serializable;

public class ResponseDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2338839789368532071L;
	
	private Boolean success;
	
	private String message;

	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	

}
