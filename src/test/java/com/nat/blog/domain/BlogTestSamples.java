package com.nat.blog.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class BlogTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Blog getBlogSample1() {
        return new Blog().id(1L).name("name1").description("description1");
    }

    public static Blog getBlogSample2() {
        return new Blog().id(2L).name("name2").description("description2");
    }

    public static Blog getBlogRandomSampleGenerator() {
        return new Blog().id(longCount.incrementAndGet()).name(UUID.randomUUID().toString()).description(UUID.randomUUID().toString());
    }
}
