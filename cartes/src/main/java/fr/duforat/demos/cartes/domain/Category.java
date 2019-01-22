package fr.duforat.demos.cartes.domain;

import java.util.List;

public class Category {

	private String name;
	private List<Menu> menuList;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Menu> getMenuList() {
		return menuList;
	}
	public void setMenuList(List<Menu> menuList) {
		this.menuList = menuList;
	}
	
}
