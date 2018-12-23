package fr.duforat.demos.commandes.dto;

import java.util.ArrayList;
import java.util.List;

import com.github.javafaker.Address;
import com.github.javafaker.Faker;

public class Checkout {
	private String firstName;
    private String lastName;
    private String floor;
    private String name;
    private String doorCode;
    private String address;
    private String postalCode;
    private String city;
    private String phone;
    private String message;
    private List<Cart> cart;
    
    public static List<Checkout> fakeCheckoutsFactory() {
    	final Checkout c = new Checkout();
    	final Faker faker = new Faker();
    	final Address a = faker.address();
    	c.setFirstName(faker.name().firstName());
    	c.setLastName(faker.name().lastName());
    	c.setFloor("0");
    	c.setName(a.lastName());
    	c.setDoorCode(a.buildingNumber());
    	c.setAddress(a.fullAddress());
    	c.setPostalCode(a.zipCode());
    	c.setCity(a.city());
    	c.setPhone(faker.phoneNumber().phoneNumber());
    	c.setMessage(faker.lorem().sentence(10));
    	c.setCart(Cart.fakeCartsFactory());
    	List<Checkout> l = new ArrayList<>();
    	l.add(c);
    	return l;
    }
      
	public List<Cart> getCart() {
		return cart;
	}
	public void setCart(List<Cart> carts) {
		this.cart = carts;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFloor() {
		return floor;
	}
	public void setFloor(String floor) {
		this.floor = floor;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDoorCode() {
		return doorCode;
	}
	public void setDoorCode(String doorCode) {
		this.doorCode = doorCode;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPostalCode() {
		return postalCode;
	}
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
