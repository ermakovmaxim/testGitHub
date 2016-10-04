package com.app.shared.appbasicsetup.usermanagement;
import com.app.config.annotation.Complexity;
import com.app.config.annotation.SourceCodeAuthorClass;
import com.athena.server.pluggable.interfaces.CommonEntityInterface;
import com.spartan.server.interfaces.UserInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import org.eclipse.persistence.annotations.Cache;
import org.eclipse.persistence.annotations.CacheType;
import org.eclipse.persistence.config.CacheIsolationType;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.Max;
import java.sql.Timestamp;
import com.athena.config.jsonHandler.CustomSqlTimestampJsonSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.athena.config.jsonHandler.CustomSqlTimestampJsonDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import javax.validation.constraints.Size;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import java.util.List;
import javax.persistence.OneToMany;
import com.athena.server.pluggable.utils.helper.EntityValidatorHelper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Version;
import com.app.shared.EntityAudit;
import javax.persistence.Embedded;
import com.app.shared.SystemInfo;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator;
import java.lang.Override;
import javax.persistence.NamedQueries;
import com.spartan.server.interfaces.UserDataInterface;

@Table(name = "UserDetail")
@Entity
@Cache(type = CacheType.CACHE, isolation = CacheIsolationType.ISOLATED)
@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "3", comments = "UserDetail", complexity = Complexity.LOW)
@JsonIdentityInfo(generator = PropertyGenerator.class, property = "userId")
@NamedQueries({ @javax.persistence.NamedQuery(name = "UserDetail.findAll", query = " select u from UserDetail u where u.systemInfo.activeStatus=1"), @javax.persistence.NamedQuery(name = "UserDetail.findByUserAccessLevelId", query = "select e from UserDetail e where e.systemInfo.activeStatus=1 and e.userAccessLevelId=:userAccessLevelId"), @javax.persistence.NamedQuery(name = "UserDetail.findByUserAccessDomainId", query = "select e from UserDetail e where e.systemInfo.activeStatus=1 and e.userAccessDomainId=:userAccessDomainId"), @javax.persistence.NamedQuery(name = "UserDetail.findById", query = "select e from UserDetail e where e.systemInfo.activeStatus=1 and e.userId =:userId") })
public class UserDetail implements Serializable, CommonEntityInterface, UserInterface, Comparator<UserDetail> {

    private static final long serialVersionUID = 1475492332486L;

    @Column(name = "userAccessCode")
    @JsonProperty("userAccessCode")
    @Max(60000)
    private Integer userAccessCode;

    @Column(name = "multiFactorAuthEnabled")
    @JsonProperty("multiFactorAuthEnabled")
    @Max(1)
    private Integer multiFactorAuthEnabled;

    @Column(name = "genTempOneTimePassword")
    @JsonProperty("genTempOneTimePassword")
    @Max(1)
    private Integer genTempOneTimePassword;

    @Column(name = "allowMultipleLogin")
    @JsonProperty("allowMultipleLogin")
    @Max(1)
    private Integer allowMultipleLogin;

    @Column(name = "isLocked")
    @JsonProperty("isLocked")
    @Max(1)
    private Integer isLocked;

    @Column(name = "isDeleted")
    @JsonProperty("isDeleted")
    @Max(1)
    private Integer isDeleted;

    @Column(name = "changePasswordNextLogin")
    @JsonProperty("changePasswordNextLogin")
    @Max(1)
    private Integer changePasswordNextLogin;

    @Column(name = "passwordExpiryDate")
    @JsonProperty("passwordExpiryDate")
    @JsonSerialize(using = CustomSqlTimestampJsonSerializer.class)
    @JsonDeserialize(using = CustomSqlTimestampJsonDeserializer.class)
    private Timestamp passwordExpiryDate;

    @Column(name = "passwordAlgo")
    @JsonProperty("passwordAlgo")
    @Size(max = 64)
    private String passwordAlgo = "1";

    @Column(name = "lastPasswordChangeDate")
    @JsonProperty("lastPasswordChangeDate")
    @JsonSerialize(using = CustomSqlTimestampJsonSerializer.class)
    @JsonDeserialize(using = CustomSqlTimestampJsonDeserializer.class)
    private Timestamp lastPasswordChangeDate;

    @Column(name = "sessionTimeout")
    @JsonProperty("sessionTimeout")
    @Max(3600)
    private Integer sessionTimeout = 1800;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "userId")
    @JsonProperty("userId")
    @GeneratedValue(generator = "UUIDGenerator")
    @Size(min = 0, max = 64)
    private String userId;

    @Column(name = "userAccessLevelId")
    @JsonProperty("userAccessLevelId")
    private String userAccessLevelId;

    @Column(name = "userAccessDomainId")
    @JsonProperty("userAccessDomainId")
    private String userAccessDomainId;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "userDetail")
    private UserData userData;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "userDetail")
    private List<PassRecovery> passRecovery;

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

    public Integer getUserAccessCode() {
        return userAccessCode;
    }

    public void setUserAccessCode(Integer _userAccessCode) {
        this.userAccessCode = _userAccessCode;
    }

    public Integer getMultiFactorAuthEnabled() {
        return multiFactorAuthEnabled;
    }

    public void setMultiFactorAuthEnabled(Integer _multiFactorAuthEnabled) {
        this.multiFactorAuthEnabled = _multiFactorAuthEnabled;
    }

    public Integer getGenTempOneTimePassword() {
        return genTempOneTimePassword;
    }

    public void setGenTempOneTimePassword(Integer _genTempOneTimePassword) {
        this.genTempOneTimePassword = _genTempOneTimePassword;
    }

    public Integer getAllowMultipleLogin() {
        return allowMultipleLogin;
    }

    public void setAllowMultipleLogin(Integer _allowMultipleLogin) {
        this.allowMultipleLogin = _allowMultipleLogin;
    }

    public Integer getIsLocked() {
        return isLocked;
    }

    public void setIsLocked(Integer _isLocked) {
        this.isLocked = _isLocked;
    }

    public Integer getIsDeleted() {
        return isDeleted;
    }

    public void setIsDeleted(Integer _isDeleted) {
        this.isDeleted = _isDeleted;
    }

    public Integer getChangePasswordNextLogin() {
        return changePasswordNextLogin;
    }

    public void setChangePasswordNextLogin(Integer _changePasswordNextLogin) {
        this.changePasswordNextLogin = _changePasswordNextLogin;
    }

    public Timestamp getPasswordExpiryDate() {
        return passwordExpiryDate;
    }

    public void setPasswordExpiryDate(Timestamp _passwordExpiryDate) {
        this.passwordExpiryDate = _passwordExpiryDate;
    }

    public String getPasswordAlgo() {
        return passwordAlgo;
    }

    public void setPasswordAlgo(String _passwordAlgo) {
        this.passwordAlgo = _passwordAlgo;
    }

    public Timestamp getLastPasswordChangeDate() {
        return lastPasswordChangeDate;
    }

    public void setLastPasswordChangeDate(Timestamp _lastPasswordChangeDate) {
        this.lastPasswordChangeDate = _lastPasswordChangeDate;
    }

    public Integer getSessionTimeout() {
        return sessionTimeout;
    }

    public void setSessionTimeout(Integer _sessionTimeout) {
        this.sessionTimeout = _sessionTimeout;
    }

    public String getPrimaryKey() {
        return userId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return userId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String _userId) {
        this.userId = _userId;
    }

    public String getUserAccessLevelId() {
        return userAccessLevelId;
    }

    public void setUserAccessLevelId(String _userAccessLevelId) {
        this.userAccessLevelId = _userAccessLevelId;
    }

    public String getUserAccessDomainId() {
        return userAccessDomainId;
    }

    public void setUserAccessDomainId(String _userAccessDomainId) {
        this.userAccessDomainId = _userAccessDomainId;
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

    public UserData getUserData() {
        return userData;
    }

    public void setUserData(UserData _userData) {
        if (_userData.getUserDetail() == null) {
            _userData.setUserDetail(this);
        }
        this.userData = _userData;
    }

    public UserDetail addPassRecovery(PassRecovery _passRecovery) {
        if (this.passRecovery == null) {
            this.passRecovery = new java.util.ArrayList<com.app.shared.appbasicsetup.usermanagement.PassRecovery>();
        }
        if (_passRecovery != null) {
            _passRecovery.setUserDetail(this);
            this.passRecovery.add(_passRecovery);
        }
        return this;
    }

    public UserDetail removePassRecovery(PassRecovery _passRecovery) {
        if (this.passRecovery != null) {
            this.passRecovery.remove(_passRecovery);
        }
        return this;
    }

    public UserDetail addAllPassRecovery(List<PassRecovery> _passRecovery) {
        if (this.passRecovery == null) {
            this.passRecovery = new java.util.ArrayList<com.app.shared.appbasicsetup.usermanagement.PassRecovery>();
        }
        if (_passRecovery != null) {
            for (int i = 0; i < _passRecovery.size(); i++) {
                _passRecovery.get(i).setUserDetail(this);
            }
            this.passRecovery.addAll(_passRecovery);
        }
        return this;
    }

    @JsonIgnore
    public Integer getTotalNumberOfPassRecovery() {
        if (this.passRecovery != null) {
            return this.passRecovery.size();
        }
        return 0;
    }

    public List<PassRecovery> getPassRecovery() {
        return passRecovery;
    }

    public void setPassRecovery(List<PassRecovery> _passRecovery) {
        for (int i = 0; i < _passRecovery.size(); i++) {
            if (_passRecovery.get(i).getUserDetail() == null) {
                _passRecovery.get(i).setUserDetail(this);
            }
        }
        this.passRecovery = _passRecovery;
    }

    @JsonIgnore
    public List<PassRecovery> getDeletedPassRecoveryList() {
        List<PassRecovery> passrecoveryToRemove = new java.util.ArrayList<PassRecovery>();
        for (PassRecovery _passrecovery : passRecovery) {
            if (_passrecovery.isHardDelete()) {
                passrecoveryToRemove.add(_passrecovery);
            }
        }
        passRecovery.removeAll(passrecoveryToRemove);
        return passrecoveryToRemove;
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
        setValidatorpassRecovery(_validateFactory);
    }

    private void setValidatorpassRecovery(EntityValidatorHelper<Object> _validateFactory) {
        if (passRecovery != null) {
            for (int i = 0; i < passRecovery.size(); i++) {
                passRecovery.get(i).setEntityValidator(_validateFactory);
            }
        }
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
        if (this.userData != null) {
            userData.setEntityAudit(customerId, userId, recordType);
            userData.setSystemInformation(recordType);
        }
        if (this.passRecovery == null) {
            this.passRecovery = new java.util.ArrayList<PassRecovery>();
        }
        for (PassRecovery _passRecovery : passRecovery) {
            _passRecovery.setEntityAudit(customerId, userId, recordType);
            _passRecovery.setSystemInformation(recordType);
        }
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
        if (this.userData != null) {
            userData.setEntityAudit(customerId, userId);
        }
        if (this.passRecovery == null) {
            this.passRecovery = new java.util.ArrayList<PassRecovery>();
        }
        for (PassRecovery _passRecovery : passRecovery) {
            _passRecovery.setEntityAudit(customerId, userId);
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
            this.systemInfo.setActiveStatus(-1);
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
     * @param UserDetail
     * @param UserDetail
     */
    @Override
    public int compare(UserDetail object1, UserDetail object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append((passwordAlgo == null ? " " : passwordAlgo));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (userId == null) {
            return super.hashCode();
        } else {
            return userId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.appbasicsetup.usermanagement.UserDetail other = (com.app.shared.appbasicsetup.usermanagement.UserDetail) obj;
            if (userId == null) {
                return false;
            } else if (!userId.equals(other.userId)) {
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

    public void setUserData(UserDataInterface userDataInterface) {
        this.userData = (UserData) userDataInterface;
    }
}
