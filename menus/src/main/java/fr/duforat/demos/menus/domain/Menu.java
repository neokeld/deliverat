package fr.duforat.demos.menus.domain;

import java.math.BigDecimal;
import java.util.UUID;

public class Menu {

		private String id;
		private String title;
		private String description;
		private BigDecimal price;
		private String picture;
		private boolean popular;

		public Menu() {
			
		}
		
		public Menu(String title, String description, BigDecimal price, String picture, boolean popular) {
			this.title = title;
			this.description = description;
			this.price = price;
			this.picture = picture;
			this.popular = popular;
		}

		public static Menu fakeMenuFactory() {
			return new Menu("test", "test", new BigDecimal("1.00"), "//f.roocdn.com/images/menu_items/1583350/item-image.jpg", true);
		}
		
		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getId() {
			return id;
		}
		
		public Menu prepareForSave() {
			this.id = UUID.randomUUID().toString();
			return this;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public BigDecimal getPrice() {
			return price;
		}

		public void setPrice(BigDecimal price) {
			this.price = price;
		}

		public String getPicture() {
			return picture;
		}

		public void setPicture(String picture) {
			this.picture = picture;
		}

		public boolean isPopular() {
			return popular;
		}

		public void setPopular(boolean popular) {
			this.popular = popular;
		}
}
