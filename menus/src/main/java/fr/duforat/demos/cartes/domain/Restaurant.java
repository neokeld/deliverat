package fr.duforat.demos.cartes.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Restaurant {

	private String id;
	private String path;
	private String name;
	private List<String> categories;
	private String price;
	private String phone;
	private int percentage;
	private String ratings;
	private String address;
	private String delay;
	private String description;
	private String picture;
	
	public Restaurant() {
		this.categories = new ArrayList<>();
	}
	
	public String getId() {
		return id;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<String> getCategories() {
		return categories;
	}
	public void addCategory(String category) {
		this.categories.add(category);
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public int getPercentage() {
		return percentage;
	}
	public void setPercentage(int percentage) {
		this.percentage = percentage;
	}
	public String getRatings() {
		return ratings;
	}
	public void setRatings(String ratings) {
		this.ratings = ratings;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDelay() {
		return delay;
	}
	public void setDelay(String delay) {
		this.delay = delay;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public static Restaurant fakeRestaurantFactory() {
		final Restaurant r = new Restaurant();
		r.setPath("Le Katarant");
		r.setName("Le Katarant - Mérignac");
		r.addCategory("Petit Déjeuner");
		r.addCategory("Brunch");
		r.setPrice("€€");
		r.setPhone("+33144180082");
		r.setPercentage(89);
		r.setRatings("50+");
		r.setAddress("8 Rue du Kata, 33700 Mérignac");
		r.setDelay("10 - 20 Mins (Au plus tôt)");
		r.setDescription("Profitez des meilleurs menus. Le Katarant propose des ingrédients simples et sains que vous assemblez vous même en faisant un Kata.");
		r.setPicture("//f.roocdn.com/images/menus/17697/header-image.jpg");
		return r;
	}
	public Restaurant prepareForSave() {
		this.id = UUID.randomUUID().toString();
		return this;
	}
}
