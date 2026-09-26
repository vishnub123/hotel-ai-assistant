package com.vishnu.hotelassistant.repository;
import com.vishnu.hotelassistant.entity.Room; import org.springframework.data.jpa.repository.JpaRepository; import java.util.*;
public interface RoomRepository extends JpaRepository<Room,Long>{ Optional<Room> findByRoomNumber(String roomNumber); List<Room> findByAvailableTrue(); }
