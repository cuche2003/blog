package com.nat.blog.service.mapper;

import com.nat.blog.domain.Blog;
import com.nat.blog.domain.Post;
import com.nat.blog.domain.User;
import com.nat.blog.service.dto.BlogDTO;
import com.nat.blog.service.dto.PostDTO;
import com.nat.blog.service.dto.UserDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Post} and its DTO {@link PostDTO}.
 */
@Mapper(componentModel = "spring")
public interface PostMapper extends EntityMapper<PostDTO, Post> {
    @Mapping(target = "user", source = "user", qualifiedByName = "userLogin")
    @Mapping(target = "blog", source = "blog", qualifiedByName = "blogName")
    PostDTO toDto(Post s);

    @Named("userLogin")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "login", source = "login")
    UserDTO toDtoUserLogin(User user);

    @Named("blogName")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    BlogDTO toDtoBlogName(Blog blog);
}
