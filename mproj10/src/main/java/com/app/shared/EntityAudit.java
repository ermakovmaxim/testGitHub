package com.app.shared;
import java.io.Serializable;
import javax.persistence.Embeddable;
import javax.persistence.Column;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Timestamp;
import com.athena.config.jsonHandler.CustomSqlTimestampJsonSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Embeddable
public class EntityAudit implements Serializable {

    private static final long serialVersionUID = 1475492040224L;

    @Column(name = "createdBy", updatable = false)
    @Size(min = 0, max = 64)
    @JsonProperty("createdBy")
    private String createdBy;

    @Column(name = "updatedBy")
    @Size(min = 0, max = 64)
    @JsonProperty("updatedBy")
    private String updatedBy;

    @Column(name = "createdDate", updatable = false)
    @JsonProperty("createdDate")
    @JsonSerialize(using = CustomSqlTimestampJsonSerializer.class)
    private Timestamp createdDate;

    @Column(name = "updatedDate")
    @JsonProperty("updatedDate")
    @JsonSerialize(using = CustomSqlTimestampJsonSerializer.class)
    private Timestamp updatedDate;

    public EntityAudit() {
        createdDate = new java.sql.Timestamp(System.currentTimeMillis());
        updatedDate = new java.sql.Timestamp(System.currentTimeMillis());
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String _createdBy) {
        this.createdBy = _createdBy;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String _updatedBy) {
        this.updatedBy = _updatedBy;
    }

    public Timestamp getUpdatedDate() {
        return updatedDate;
    }
}
