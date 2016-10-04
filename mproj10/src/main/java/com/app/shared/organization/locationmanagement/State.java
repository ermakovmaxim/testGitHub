package com.app.shared.organization.locationmanagement;
import com.app.config.annotation.Complexity;
import com.app.config.annotation.SourceCodeAuthorClass;
import com.athena.server.pluggable.interfaces.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import org.eclipse.persistence.annotations.Cache;
import org.eclipse.persistence.annotations.CacheType;
import org.eclipse.persistence.config.CacheIsolationType;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Max;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.athena.server.pluggable.utils.helper.EntityValidatorHelper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Version;
import com.app.shared.EntityAudit;
import javax.persistence.Embedded;
import com.app.shared.SystemInfo;
import java.lang.Override;
import javax.persistence.NamedQueries;

@Table(name = "State")
@Entity
@Cache(type = CacheType.CACHE, isolation = CacheIsolationType.ISOLATED)
@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "3", comments = "State", complexity = Complexity.LOW)
@NamedQueries({ @javax.persistence.NamedQuery(name = "State.findAll", query = " select u from State u where u.systemInfo.activeStatus=1"), @javax.persistence.NamedQuery(name = "State.DefaultFinders", query = "select e from State e where e.systemInfo.activeStatus=1 and e.countryId LIKE :countryId and e.stateName LIKE :stateName and e.stateCode BETWEEN :minstateCode AND :maxstateCode and e.stateCodeChar2 LIKE :stateCodeChar2 and e.stateCodeChar3 LIKE :stateCodeChar3"), @javax.persistence.NamedQuery(name = "State.findByCountryId", query = "select e from State e where e.systemInfo.activeStatus=1 and e.countryId=:countryId"), @javax.persistence.NamedQuery(name = "State.findById", query = "select e from State e where e.systemInfo.activeStatus=1 and e.stateId =:stateId") })
public class State implements Serializable, CommonEntityInterface, Comparator<State> {

    private static final long serialVersionUID = 1475492318004L;

    @Column(name = "stateName")
    @JsonProperty("stateName")
    @NotNull
    @Size(min = 0, max = 256)
    private String stateName;

    @Column(name = "stateCode")
    @JsonProperty("stateCode")
    @Max(2)
    private Integer stateCode;

    @Column(name = "stateCodeChar2")
    @JsonProperty("stateCodeChar2")
    @NotNull
    @Size(min = 0, max = 32)
    private String stateCodeChar2;

    @Column(name = "stateCodeChar3")
    @JsonProperty("stateCodeChar3")
    @Size(max = 32)
    private String stateCodeChar3;

    @Column(name = "stateDescription")
    @JsonProperty("stateDescription")
    @Size(max = 256)
    private String stateDescription;

    @Column(name = "stateFlag")
    @JsonProperty("stateFlag")
    @Size(max = 128)
    private String stateFlag;

    @Column(name = "stateCapital")
    @JsonProperty("stateCapital")
    @Size(max = 128)
    private String stateCapital;

    @Column(name = "stateCapitalLatitude")
    @JsonProperty("stateCapitalLatitude")
    @Max(11)
    private Integer stateCapitalLatitude;

    @Column(name = "stateCapitalLongitude")
    @JsonProperty("stateCapitalLongitude")
    @Max(11)
    private Integer stateCapitalLongitude;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "stateId")
    @JsonProperty("stateId")
    @GeneratedValue(generator = "UUIDGenerator")
    @Size(min = 0, max = 64)
    private String stateId;

    @Column(name = "countryId")
    @JsonProperty("countryId")
    private String countryId;

    @Transient
    @JsonIgnore
    private EntityValidatorHelper<Object> entityValidator;

    @Version
    @Column(name = "versionId")
    @JsonProperty("versionId")
    private int versionId;

    @Embedded
    @JsonIgnore
    private EntityAudit entityAudit = new EntityAudit();

    @Embedded
    private SystemInfo systemInfo = new SystemInfo();

    @Transient
    private String primaryDisplay;

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String _stateName) {
        if (_stateName != null) {
            this.stateName = _stateName;
        }
    }

    public Integer getStateCode() {
        return stateCode;
    }

    public void setStateCode(Integer _stateCode) {
        this.stateCode = _stateCode;
    }

    public String getStateCodeChar2() {
        return stateCodeChar2;
    }

    public void setStateCodeChar2(String _stateCodeChar2) {
        if (_stateCodeChar2 != null) {
            this.stateCodeChar2 = _stateCodeChar2;
        }
    }

    public String getStateCodeChar3() {
        return stateCodeChar3;
    }

    public void setStateCodeChar3(String _stateCodeChar3) {
        this.stateCodeChar3 = _stateCodeChar3;
    }

    public String getStateDescription() {
        return stateDescription;
    }

    public void setStateDescription(String _stateDescription) {
        this.stateDescription = _stateDescription;
    }

    public String getStateFlag() {
        return stateFlag;
    }

    public void setStateFlag(String _stateFlag) {
        this.stateFlag = _stateFlag;
    }

    public String getStateCapital() {
        return stateCapital;
    }

    public void setStateCapital(String _stateCapital) {
        this.stateCapital = _stateCapital;
    }

    public Integer getStateCapitalLatitude() {
        return stateCapitalLatitude;
    }

    public void setStateCapitalLatitude(Integer _stateCapitalLatitude) {
        this.stateCapitalLatitude = _stateCapitalLatitude;
    }

    public Integer getStateCapitalLongitude() {
        return stateCapitalLongitude;
    }

    public void setStateCapitalLongitude(Integer _stateCapitalLongitude) {
        this.stateCapitalLongitude = _stateCapitalLongitude;
    }

    public String getPrimaryKey() {
        return stateId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return stateId;
    }

    public String getStateId() {
        return stateId;
    }

    public void setStateId(String _stateId) {
        this.stateId = _stateId;
    }

    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String _countryId) {
        this.countryId = _countryId;
    }

    public int getVersionId() {
        return versionId;
    }

    public void setVersionId(int _versionId) {
        this.versionId = _versionId;
    }

    public void setPrimaryDisplay(String _primaryDisplay) {
        this.primaryDisplay = _primaryDisplay;
    }

    public SystemInfo getSystemInfo() {
        return systemInfo;
    }

    public void setSystemInfo(SystemInfo _systemInfo) {
        this.systemInfo = _systemInfo;
    }

    /**
     * Returns boolean value if System information's active status =-1
     * @return boolean
     */
    @JsonIgnore
    public boolean isHardDelete() {
        if (this.systemInfo == null) {
            this.systemInfo = new SystemInfo();
        }
        if (this.systemInfo.getActiveStatus() == -1) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Validates the entity fields based on java.validation.constraints annotaions and sets isEntityValided value in System information object
     * @return boolean
     * @throws java.lang.SecurityException
     */
    @JsonIgnore
    @Override
    public boolean isValid() throws SecurityException {
        boolean isValid = false;
        if (this.entityValidator != null) {
            isValid = this.entityValidator.validateEntity(this);
            this.systemInfo.setEntityValidated(true);
        } else {
            throw new java.lang.SecurityException();
        }
        return isValid;
    }

    /**
     * Sets EntityValidator object
     * @param _validateFactory
     */
    @Override
    public void setEntityValidator(EntityValidatorHelper<Object> _validateFactory) {
        this.entityValidator = _validateFactory;
    }

    /**
     * Creates a new entity audit object and  if primarykey fields are null then sets created by, updated by, active status values in the entity audit field.
     * @param customerId
     * @param userId
     */
    @Override
    public void setEntityAudit(int customerId, String userId, RECORD_TYPE recordType) {
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (recordType == RECORD_TYPE.ADD) {
            this.entityAudit.setCreatedBy(userId);
            this.entityAudit.setUpdatedBy(userId);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
        setSystemInformation(recordType);
    }

    /**
     * Creates a new entity audit object and System Information object and based on @Params RECORD_TYPE sets created by and updated by values in the entity audit field.
     * @param CustomerId
     * @param userId
     * @param RECORD_TYPE
     */
    @Override
    public void setEntityAudit(int customerId, String userId) {
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (getPrimaryKey() == null) {
            this.entityAudit.setCreatedBy(userId);
            this.entityAudit.setUpdatedBy(userId);
            this.systemInfo.setActiveStatus(1);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
    }

    /**
     * Returns Logged in user informatio.
     * @return auditInfo
     */
    @JsonIgnore
    public String getLoggedInUserInfo() {
        String auditInfo = "";
        if (this.entityAudit != null) {
            auditInfo = entityAudit.toString();
        }
        return auditInfo;
    }

    /**
     * Creates new System Information object.
     * @param RECORD_TYPE
     */
    @Override
    @JsonIgnore
    public void setSystemInformation(RECORD_TYPE recordType) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        if (recordType == RECORD_TYPE.DELETE) {
            this.systemInfo.setActiveStatus(0);
        } else {
            this.systemInfo.setActiveStatus(1);
        }
    }

    /**
     * Sets active status in System Information object.
     * @param activeStatus
     */
    @JsonIgnore
    public void setSystemInformation(Integer activeStatus) {
        this.systemInfo.setActiveStatus(activeStatus);
    }

    /**
     * Returns system information object.
     * @return systemInfo
     */
    @JsonIgnore
    public String getSystemInformation() {
        String systemInfo = "";
        if (this.systemInfo != null) {
            systemInfo = systemInfo.toString();
        }
        return systemInfo;
    }

    /**
     * Creates System information obect if null and sets transaction access code in that object.
     * @param transactionAccessCode
     */
    @Override
    @JsonIgnore
    public void setSystemTxnCode(Integer transactionAccessCode) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        this.systemInfo.setTxnAccessCode(transactionAccessCode);
    }

    /**
     * Compares 2 objects and returns integer value
     * @param State
     * @param State
     */
    @Override
    public int compare(State object1, State object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append((stateName == null ? " " : stateName));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (stateId == null) {
            return super.hashCode();
        } else {
            return stateId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.organization.locationmanagement.State other = (com.app.shared.organization.locationmanagement.State) obj;
            if (stateId == null) {
                return false;
            } else if (!stateId.equals(other.stateId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isEntityValidated() {
        return this.systemInfo.isEntityValidated();
    }
}
