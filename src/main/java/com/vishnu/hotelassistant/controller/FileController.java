package com.vishnu.hotelassistant.controller;

import com.vishnu.hotelassistant.service.S3StorageService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/files")
public class FileController {

    private final S3StorageService storage;

    public FileController(S3StorageService storage) {
        this.storage = storage;
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String upload(
            @RequestPart("file") MultipartFile file) {
        return storage.upload(file);
    }
}