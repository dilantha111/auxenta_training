package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.OperatorOverloader;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.OperatorDto;
import com.example.demo.model.Operator;
import com.example.demo.repository.OperatorRepository;

@RestController
@RequestMapping("/operator")
public class OperatorController {
	@Autowired
	private OperatorRepository operatorRepository;
	
	@GetMapping
	public Iterable<Operator> get(){
		return operatorRepository.findAll();
	}
	
	@PostMapping
	public String post(@RequestBody OperatorDto dto){
		Operator operator = new Operator();
		operator.buildModel(dto);
		operatorRepository.save(operator);
		return "added to the table";
	}
	
	@DeleteMapping
	public String delete(@RequestParam Integer id){
		operatorRepository.delete(id);
		return "deleted";
	}
}
