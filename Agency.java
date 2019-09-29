package com.claim.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="agency")
public class Agency {
	
		@Column(name="agency_name")
		private String name;
		
		@Id
		@Column(name="id")
		private Long id;
		
		@Column(name="address")
		private String address; 
		
		@Column(name="city")
		private String city;
		
		@Column(name="state")
		private String state;
		
		@Column(name="zip")
		private String zip;
		
		@Column(name="phone")
		private String phone;
		
		@Column(name="email")
		private String email;
		
		@Column(name="website")
		private String website;
		
		@Column(name="latitude")
		private String latitude;
		
		@Column(name="longitude")
		private String longitude; 
		
		@Column(name="donationHours")
		private String donationHours;
		
		@Column(name="doPickUp")
		private Boolean doPickUp;
		
		@Column(name="items_accepted")
		private String itemsAccepted;
		
		@Column(name="type_of_org")
		private String typeOfOrg;
		
		@Column(name="mission_statement",  length=2000)
		private String missionStatement;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getLatitude() {
			return latitude;
		}

		public void setLatitude(String latitude) {
			this.latitude = latitude;
		}

		public String getLongitude() {
			return longitude;
		}

		public void setLongitude(String longitude) {
			this.longitude = longitude;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getDonationHours() {
			return donationHours;
		}

		public void setDonationHours(String donationHours) {
			this.donationHours = donationHours;
		}

		public Boolean getDoPickUp() {
			return doPickUp;
		}

		public void setDoPickUp(Boolean doPickUp) {
			this.doPickUp = doPickUp;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		public String getState() {
			return state;
		}

		public void setState(String state) {
			this.state = state;
		}

		public String getZip() {
			return zip;
		}

		public void setZip(String zip) {
			this.zip = zip;
		}

		public String getWebsite() {
			return website;
		}

		public void setWebsite(String website) {
			this.website = website;
		}

		public String getItemsAccepted() {
			return itemsAccepted;
		}

		public void setItemsAccepted(String itemsAccepted) {
			this.itemsAccepted = itemsAccepted;
		}

		public String getTypeOfOrg() {
			return typeOfOrg;
		}

		public void setTypeOfOrg(String typeOfOrg) {
			this.typeOfOrg = typeOfOrg;
		}

		public String getMissionStatement() {
			return missionStatement;
		}

		public void setMissionStatement(String missionStatement) {
			this.missionStatement = missionStatement;
		}	
		
				
		
}
		
		
		