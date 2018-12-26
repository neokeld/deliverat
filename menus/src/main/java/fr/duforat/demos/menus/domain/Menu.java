package fr.duforat.demos.menus.domain;

import java.math.BigDecimal;
import java.util.UUID;

public class Menu {

		private String id;
		private String title;
		private String description;
		private BigDecimal price;

		public Menu() {
			
		}
		
		public Menu(String title, String description, BigDecimal price) {
			this.title = title;
			this.description = description;
			this.price = price;
		}

		public static Menu fakeMenuFactory() {
			return new Menu("test", "test", new BigDecimal("1.00"));
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
}
