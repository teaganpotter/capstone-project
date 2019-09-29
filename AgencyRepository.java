package com.claim.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.claim.entity.Agency;

public interface AgencyRepository extends JpaRepository<Agency, Long> {
	
	@Query("FROM Agency WHERE itemsAccepted like ?1")
	List<Agency> getAgenciesByItemsAccepted(String itemsAccepted);
}
	



