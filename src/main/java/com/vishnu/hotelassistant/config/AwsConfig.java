package com.vishnu.hotelassistant.config;
import org.springframework.beans.factory.annotation.Value; import org.springframework.context.annotation.*; import software.amazon.awssdk.regions.Region; import software.amazon.awssdk.services.s3.S3Client;
@Configuration public class AwsConfig { @Bean S3Client s3Client(@Value("${aws.region}")String region){return S3Client.builder().region(Region.of(region)).build();} }
