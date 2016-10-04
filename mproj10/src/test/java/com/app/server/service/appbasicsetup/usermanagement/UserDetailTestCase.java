package com.app.server.service.appbasicsetup.usermanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.appbasicsetup.usermanagement.UserDetailRepository;
import com.app.shared.appbasicsetup.usermanagement.UserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.server.pluggable.utils.helper.RuntimeLogInfoHelper;
import com.athena.server.pluggable.utils.helper.EntityValidatorHelper;
import com.app.server.service.RandomValueGenerator;
import java.util.HashMap;
import java.util.List;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.BeforeClass;
import org.junit.Before;
import org.junit.After;
import org.springframework.mock.web.MockServletContext;
import com.spartan.pluggable.logger.api.LogManagerFactory;
import com.athena.server.pluggable.utils.AppLoggerConstant;
import org.springframework.web.context.request.RequestContextHolder;
import com.spartan.pluggable.logger.event.RequestHeaderBean;
import com.spartan.pluggable.logger.api.RuntimeLogUserInfoBean;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.junit.Assert;
import com.athena.server.pluggable.interfaces.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import com.app.shared.appbasicsetup.usermanagement.UserAccessLevel;
import com.app.server.repository.appbasicsetup.usermanagement.UserAccessLevelRepository;
import com.app.shared.appbasicsetup.usermanagement.UserAccessDomain;
import com.app.server.repository.appbasicsetup.usermanagement.UserAccessDomainRepository;
import com.app.shared.appbasicsetup.usermanagement.PassRecovery;
import com.app.shared.appbasicsetup.usermanagement.Question;
import com.app.server.repository.appbasicsetup.usermanagement.QuestionRepository;
import com.app.shared.appbasicsetup.usermanagement.UserData;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = { com.app.config.JPAConfig.class, com.app.config.WebConfigExtended.class })
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class UserDetailTestCase extends EntityTestCriteria {

    /**
     * UserDetailRepository Variable
     */
    @Autowired
    private UserDetailRepository<UserDetail> userdetailRepository;

    /**
     * RuntimeLogInfoHelper Variable
     */
    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    /**
     * EntityValidator Variable
     */
    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    /**
     * RandomValueGenerator Variable
     */
    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    /**
     * List of EntityCriteria for negative Testing
     */
    private static List<EntityTestCriteria> entityConstraint;

    /**
     *  Variable to calculate health status
     */
    @Autowired
    private ArtMethodCallStack methodCallStack;

    /**
     * MockHttpSession Variable
     */
    protected MockHttpSession session;

    /**
     * MockHttpServletRequest Variable
     */
    protected MockHttpServletRequest request;

    /**
     * MockHttpServletResponse Variable
     */
    protected MockHttpServletResponse response;

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
        final MockServletContext mockServletContext = new MockServletContext("file:src/main/webapp");
        try {
            final String _path = mockServletContext.getRealPath("/WEB-INF/conf/");
            LogManagerFactory.createLogManager(_path, AppLoggerConstant.LOGGER_ID);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).requestCompleted();
        RequestContextHolder.resetRequestAttributes();
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo("customer", "AAAAA", request.getRemoteHost());
        Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
        entityConstraint = addingListOfFieldForNegativeTesting();
        runtimeLogInfoHelper.setRequestHeaderBean(new RequestHeaderBean(new RuntimeLogUserInfoBean("AAAA", "AAAA", request.getRemoteHost(), 0, 0, 0), "", methodCallStack.getRequestId()));
    }

    private UserDetail createUserDetail(Boolean isSave) throws Exception {
        UserAccessLevel useraccesslevel = new UserAccessLevel();
        useraccesslevel.setUserAccessLevel(valueGenerator.getRandomInteger(99999, 0));
        useraccesslevel.setLevelIcon("yP85a4EQeIsSzdj8zW2icbilO8dXIWicI79g03GmfhNkWtezbm");
        useraccesslevel.setLevelDescription("r3rD3wGddmFhTb5K7MN6LnFGg2FdirClpGmGnfu0T78LbgxEa3");
        useraccesslevel.setLevelHelp("zBnKVgSz1dvpzPhZPIFWlsa0VdLg3k8XtKJHv5FyGJPR2qb0QD");
        useraccesslevel.setLevelName("M3lOewsvEaS4U76RGJSAE9AgREit6pY8XMy9LSrSpGGjsHEa3l");
        UserAccessLevel UserAccessLevelTest = new UserAccessLevel();
        if (isSave) {
            UserAccessLevelTest = useraccesslevelRepository.save(useraccesslevel);
            map.put("UserAccessLevelPrimaryKey", useraccesslevel._getPrimarykey());
        }
        UserAccessDomain useraccessdomain = new UserAccessDomain();
        useraccessdomain.setDomainIcon("pEVTueMT8vgHjQVRDI5ImsQSuwR7dhZ7cW0woCqmCrYAzBKCeE");
        useraccessdomain.setUserAccessDomain(valueGenerator.getRandomInteger(99999, 0));
        useraccessdomain.setDomainDescription("ocUwUxVeybh2Fu8FVOaw1rfHtgieksDJihGMsALiKntoIq2Gza");
        useraccessdomain.setDomainHelp("cZaBimEDvEXX56rdIRpyNjYjXZobWA6FBbBrxcdOuXCm9s4OAp");
        useraccessdomain.setDomainName("3lsKMN30imHurvlGhNZOh8bodWTWN3oi3t2cd9ODjUCDlqSGXU");
        UserAccessDomain UserAccessDomainTest = new UserAccessDomain();
        if (isSave) {
            UserAccessDomainTest = useraccessdomainRepository.save(useraccessdomain);
            map.put("UserAccessDomainPrimaryKey", useraccessdomain._getPrimarykey());
        }
        UserDetail userdetail = new UserDetail();
        userdetail.setChangePasswordNextLogin(1);
        userdetail.setPasswordAlgo("t0avQC5gTbj8xa1mbIMfIWjzcptpg7El15ToBdgWdbjgVUiJ9d");
        userdetail.setUserAccessCode(38201);
        userdetail.setGenTempOneTimePassword(1);
        userdetail.setIsLocked(1);
        userdetail.setAllowMultipleLogin(1);
        userdetail.setMultiFactorAuthEnabled(1);
        userdetail.setUserAccessLevelId((java.lang.String) UserAccessLevelTest._getPrimarykey()); /* ******Adding refrenced table data */
        userdetail.setPasswordExpiryDate(new java.sql.Timestamp(1475492333719l));
        userdetail.setIsDeleted(1);
        userdetail.setLastPasswordChangeDate(new java.sql.Timestamp(1475492333719l));
        userdetail.setSessionTimeout(3395);
        userdetail.setUserAccessDomainId((java.lang.String) UserAccessDomainTest._getPrimarykey()); /* ******Adding refrenced table data */
        java.util.List<PassRecovery> listOfPassRecovery = new java.util.ArrayList<PassRecovery>();
        PassRecovery passrecovery = new PassRecovery();
        Question question = new Question();
        question.setQuestionDetails("8lJujk3i8aq1U1cYFLe5iLAnr2lbpeF2MHPaMocP8THcLJzub8");
        question.setQuestion("a8RhSzaw2uKbjxoa5Zd9yEAN347u3yrgmflzEAmcH2cjITEqDM");
        question.setLevelid(7);
        question.setQuestionIcon("TklVI1ApTkerfb6NWnZvbBSlSGQwlXfOdQex8jONivtcZ0bJHR");
        Question QuestionTest = new Question();
        if (isSave) {
            QuestionTest = questionRepository.save(question);
            map.put("QuestionPrimaryKey", question._getPrimarykey());
        }
        passrecovery.setUserDetail(userdetail);
        passrecovery.setAnswer("nyOnXR93KM0FaInPyY9bkX98mO5x75B2zhwSiyb6r1kuh1vqHG");
        passrecovery.setQuestionId((java.lang.String) QuestionTest._getPrimarykey());
        listOfPassRecovery.add(passrecovery);
        userdetail.addAllPassRecovery(listOfPassRecovery);
        UserData userdata = new UserData();
        userdata.setPassword("0t3lQJcEkAiMGgyN7kHBo4pZNUzPH0f2d5jaxpkuVokQoJynTT");
        userdata.setLast5Passwords("V46x4I2Qpe4VgpCYDzzZU3ooYlnHu9FOfuGAq1shStpyDWsOjA");
        userdata.setOneTimePasswordGenDate(new java.sql.Timestamp(1475492333875l));
        userdata.setOneTimePasswordExpiry(6);
        userdata.setOneTimePassword("FQrnIaGH8o1hcZCNssYWooswc3i2Euna");
        userdata.setPassword("4kvWjTh2m6ec55mIvxWIsTJE18B9HQdATatSZiZrEwC7UT3qw8");
        userdata.setLast5Passwords("zAirTMj7FUy1tCRIKrpoA9sBJa00uXwv9IS6YV0L9YFttmlbvL");
        userdata.setOneTimePasswordGenDate(new java.sql.Timestamp(1475492333885l));
        userdata.setOneTimePasswordExpiry(7);
        userdata.setOneTimePassword("wQtSFZWYVFdDrB6q0lGtgaZxdpWMmy6h");
        userdata.setUserDetail(userdetail);
        userdetail.setUserData(userdata);
        userdetail.setEntityValidator(entityValidator);
        return userdetail;
    }

    @Test
    public void test1Save() {
        try {
            UserDetail userdetail = createUserDetail(true);
            userdetail.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            userdetail.isValid();
            userdetailRepository.save(userdetail);
            map.put("UserDetailPrimaryKey", userdetail._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private UserAccessLevelRepository<UserAccessLevel> useraccesslevelRepository;

    @Autowired
    private UserAccessDomainRepository<UserAccessDomain> useraccessdomainRepository;

    @Autowired
    private QuestionRepository<Question> questionRepository;

    @Test
    public void test2findByuserAccessLevelId() {
        try {
            java.util.List<UserDetail> listofuserAccessLevelId = userdetailRepository.findByUserAccessLevelId((java.lang.String) map.get("UserAccessLevelPrimaryKey"));
            if (listofuserAccessLevelId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test2findByuserAccessDomainId() {
        try {
            java.util.List<UserDetail> listofuserAccessDomainId = userdetailRepository.findByUserAccessDomainId((java.lang.String) map.get("UserAccessDomainPrimaryKey"));
            if (listofuserAccessDomainId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("UserDetailPrimaryKey"));
            userdetailRepository.delete((java.lang.String) map.get("UserDetailPrimaryKey")); /* Deleting refrenced data */
            questionRepository.delete((java.lang.String) map.get("QuestionPrimaryKey")); /* Deleting refrenced data */
            useraccessdomainRepository.delete((java.lang.String) map.get("UserAccessDomainPrimaryKey")); /* Deleting refrenced data */
            useraccesslevelRepository.delete((java.lang.String) map.get("UserAccessLevelPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateUserDetail(EntityTestCriteria contraints, UserDetail userdetail) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            userdetail.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            userdetail.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            userdetail.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            userdetailRepository.save(userdetail);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 1, "userAccessCode", 104232));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "multiFactorAuthEnabled", 2));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 3, "genTempOneTimePassword", 2));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 4, "allowMultipleLogin", 2));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 5, "isLocked", 2));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 6, "isDeleted", 2));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 7, "changePasswordNextLogin", 2));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 8, "passwordAlgo", "ZdysL7CV6Tc779FzPqiRxprt27MdaBiblaE6ZxEosN7tGD3gvY2WbYxfBoXOTuyAw"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 9, "sessionTimeout", 6008));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                UserDetail userdetail = createUserDetail(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = userdetail.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        userdetail.setUserAccessCode(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateUserDetail(contraints, userdetail);
                        failureCount++;
                        break;
                    case 2:
                        userdetail.setMultiFactorAuthEnabled(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateUserDetail(contraints, userdetail);
                        failureCount++;
                        break;
                    case 3:
                        userdetail.setGenTempOneTimePassword(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateUserDetail(contraints, userdetail);
                        failureCount++;
                        break;
                    case 4:
                        userdetail.setAllowMultipleLogin(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateUserDetail(contraints, userdetail);
                        failureCount++;
                        break;
                    case 5:
                        userdetail.setIsLocked(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateUserDetail(contraints, userdetail);
                        failureCount++;
                        break;
                    case 6:
                        userdetail.setIsDeleted(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateUserDetail(contraints, userdetail);
                        failureCount++;
                        break;
                    case 7:
                        userdetail.setChangePasswordNextLogin(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateUserDetail(contraints, userdetail);
                        failureCount++;
                        break;
                    case 8:
                        userdetail.setPasswordAlgo(contraints.getNegativeValue().toString());
                        validateUserDetail(contraints, userdetail);
                        failureCount++;
                        break;
                    case 9:
                        userdetail.setSessionTimeout(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateUserDetail(contraints, userdetail);
                        failureCount++;
                        break;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        if (failureCount > 0) {
            Assert.fail();
        }
    }
}
