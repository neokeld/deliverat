package fr.duforat.demos.commandes.dto;

import java.util.ArrayList;
import java.util.List;

import com.github.javafaker.Faker;

public class Cart {
    private String id;
    private String title;
    private int quantity; 
    private float price;
    public static List<Cart> fakeCartsFactory() {
    	Faker faker = new Faker();
    	Cart c = new Cart();
    	c.setId(faker.idNumber().valid());
    	c.setTitle(faker.funnyName().name());
    	c.setQuantity(faker.number().numberBetween(1, 10));
    	c.setPrice(faker.number().numberBetween(10, 50));
    	List<Cart> l = new ArrayList<>();
    	l.add(c);
    	return l;
    }
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
}