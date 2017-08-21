package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.example.demo.dto.OperatorDto;

@Entity
@Table(name="scp_operators")
public class Operator {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@Column(name="operator_name")
	private String operatorName;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOperatorName() {
		return operatorName;
	}

	public void setOperatorName(String operatorName) {
		this.operatorName = operatorName;
	}
	
	public void buildModel(OperatorDto dto) {
		if(dto.getId() != null) {
			this.id = dto.getId();
		}
		
		this.operatorName = dto.getName();
	}
}
