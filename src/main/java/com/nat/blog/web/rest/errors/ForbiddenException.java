package com.nat.blog.web.rest.errors;

import java.net.URI;
import org.springframework.http.HttpStatus;
import org.springframework.web.ErrorResponseException;
import tech.jhipster.web.rest.errors.ProblemDetailWithCause;
import tech.jhipster.web.rest.errors.ProblemDetailWithCause.ProblemDetailWithCauseBuilder;

@SuppressWarnings("java:S110") // Inheritance tree of classes should not be too deep
public class ForbiddenException extends ErrorResponseException {

    private static final long serialVersionUID = 1L;

    private final String errorKey;

    public ForbiddenException(String defaultMessage, String errorKey) {
        this(ErrorConstants.DEFAULT_TYPE, defaultMessage, errorKey);
    }

    public ForbiddenException(URI type, String defaultMessage, String errorKey) {
        super(
            HttpStatus.FORBIDDEN,
            ProblemDetailWithCauseBuilder.instance()
                .withStatus(HttpStatus.FORBIDDEN.value())
                .withType(type)
                .withTitle(defaultMessage)
                .withProperty("message", "error." + errorKey)
                .build(),
            null
        );
        this.errorKey = errorKey;
    }

    public String getErrorKey() {
        return errorKey;
    }

    public ProblemDetailWithCause getProblemDetailWithCause() {
        return (ProblemDetailWithCause) this.getBody();
    }
}
