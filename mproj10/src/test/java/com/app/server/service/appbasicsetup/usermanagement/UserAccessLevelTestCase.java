package com.app.server.service.appbasicsetup.usermanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.appbasicsetup.usermanagement.UserAccessLevelRepository;
import com.app.shared.appbasicsetup.usermanagement.UserAccessLevel;
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

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = { com.app.config.JPAConfig.class, com.app.config.WebConfigExtended.class })
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class UserAccessLevelTestCase extends EntityTestCriteria {

    /**
     * UserAccessLevelRepository Variable
     */
    @Autowired
    private UserAccessLevelRepository<UserAccessLevel> useraccesslevelRepository;

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

    private UserAccessLevel createUserAccessLevel(Boolean isSave) throws Exception {
        UserAccessLevel useraccesslevel = new UserAccessLevel();
        useraccesslevel.setUserAccessLevel(valueGenerator.getRandomInteger(99999, 0));
        useraccesslevel.setLevelIcon("T1xxIl51PWIihfuvojTMWHvdlzqHtXbr6Xt42qBwCl14cKYysA");
        useraccesslevel.setLevelDescription("9q8Fqk7THvKLjiA7RFl08notEMNEaTWtFa0Q4ROaMDzymVRASL");
        useraccesslevel.setLevelHelp("INUo7P8NWKS16CaUFQtzLyFFPOYv7PkfUaIvuSCS0Qpir8ZFeu");
        useraccesslevel.setLevelName("outZdYMlUmG288qBWcIdtA1sLMYcXF7xmDboh8DskGBWfxc0QC");
        useraccesslevel.setEntityValidator(entityValidator);
        return useraccesslevel;
    }

    @Test
    public void test1Save() {
        try {
            UserAccessLevel useraccesslevel = createUserAccessLevel(true);
            useraccesslevel.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            useraccesslevel.isValid();
            useraccesslevelRepository.save(useraccesslevel);
            map.put("UserAccessLevelPrimaryKey", useraccesslevel._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test2Update() {
        try {
            Assert.assertNotNull(map.get("UserAccessLevelPrimaryKey"));
            UserAccessLevel useraccesslevel = useraccesslevelRepository.findById((java.lang.String) map.get("UserAccessLevelPrimaryKey"));
            useraccesslevel.setUserAccessLevel(47377);
            useraccesslevel.setLevelIcon("KwFYMtQhSuWuVV4Yhwrm01WlYGdvhMpbPOqtoxwr0qE3gEkBib");
            useraccesslevel.setLevelDescription("eingrlS23tv9Fgejw48GJ6vHWe88xTxOdWa4FW0DotwUyC80kW");
            useraccesslevel.setLevelHelp("hy0CyQzRhSWQThtHiDAe1fMU4myl5q6V1jmf9SGBrlbdlm8Ptn");
            useraccesslevel.setVersionId(1);
            useraccesslevel.setLevelName("BZKk0qOym7A94UxjHLhr4ZPriKNlpINusvtgd2a996E6vRdA5s");
            useraccesslevel.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            useraccesslevelRepository.update(useraccesslevel);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("UserAccessLevelPrimaryKey"));
            useraccesslevelRepository.findById((java.lang.String) map.get("UserAccessLevelPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("UserAccessLevelPrimaryKey"));
            useraccesslevelRepository.delete((java.lang.String) map.get("UserAccessLevelPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateUserAccessLevel(EntityTestCriteria contraints, UserAccessLevel useraccesslevel) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            useraccesslevel.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            useraccesslevel.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            useraccesslevel.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            useraccesslevelRepository.save(useraccesslevel);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 1, "userAccessLevel", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "userAccessLevel", 155380));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 3, "levelName", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 4, "levelName", "D1ByHwPvmwPf2AjenvOqNokghNSHBMaWjkKjv0mQDTMzWvSExRVvavhB4T8M270r8se53yQf9g5WKwPbqXvbussH5Tt1EnE5D1J5XNz2H1B6ytR1ZWf18NH0G0gFEU0eBwinunqJSy64ugznEKJbuwN4mFiJXDh1rfeZCQbz46JkqAHrufa4XjvomURf52RWIlBivxAQGRrcQ57QHCAzvQEFMr8bQ1EKzXY6jLYpVoeliBZ9DKCbKynLYsICRRxgg"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 5, "levelDescription", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 6, "levelDescription", "TeB4qBsUKdhqRBSEqZBh7Mz6siN2lOwkNh2go57sL9DH0OmcGGiqhLFWVMmTZPEw28js9OHT95vfSFQGGwJk9aIawbzGb0gtFEpqGt2UFxv0PCYcRXgqFdi7zjbFjeL4ib1acinwGAiPEVqBAuFzRMUYVRRwm7iN6C0yzL9KiucJsWImDcteBvKV1u4kZ1m5swjO5NyNAGRGRfatzfg57BU71mkHYhwZa3PV5yY3HDCt5HbXidOzzWGZaHGmtdKUm"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 7, "levelHelp", "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"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 8, "levelIcon", "5bpmEwQrpYmEFNeGSoKZtZq8uh3Uyryq0o77b5xl7g8YK7mFbQWS5quTdNCOAIxKzfAcz26EYxQ6BCvqUlDrMRSwzdeLjgcKpSNLe8kjzYNa4Q2G9hk5ARYkjJ3gwypkTgckKLpKZqFGYmFjXEXQu5AOZBLCrvbWRFPy2cKcwnmn1MnEzDOiGEfGPFanPsFrkIfNTEDiXjUPwJy8qcj1k3MrI345atIpwAM2PWwwUlxEzKm9hBg12YukwPssApxMS"));
        entityConstraints.add(new EntityTestCriteria(UNIQUE, 9, "CombineUniqueKey", ""));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        UserAccessLevel useraccesslevelUnique = useraccesslevelRepository.findById((java.lang.String) map.get("UserAccessLevelPrimaryKey"));
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                UserAccessLevel useraccesslevel = createUserAccessLevel(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = useraccesslevel.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        field.setAccessible(true);
                        field.set(useraccesslevel, null);
                        validateUserAccessLevel(contraints, useraccesslevel);
                        failureCount++;
                        break;
                    case 2:
                        useraccesslevel.setUserAccessLevel(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateUserAccessLevel(contraints, useraccesslevel);
                        failureCount++;
                        break;
                    case 3:
                        field.setAccessible(true);
                        field.set(useraccesslevel, null);
                        validateUserAccessLevel(contraints, useraccesslevel);
                        failureCount++;
                        break;
                    case 4:
                        useraccesslevel.setLevelName(contraints.getNegativeValue().toString());
                        validateUserAccessLevel(contraints, useraccesslevel);
                        failureCount++;
                        break;
                    case 5:
                        field.setAccessible(true);
                        field.set(useraccesslevel, null);
                        validateUserAccessLevel(contraints, useraccesslevel);
                        failureCount++;
                        break;
                    case 6:
                        useraccesslevel.setLevelDescription(contraints.getNegativeValue().toString());
                        validateUserAccessLevel(contraints, useraccesslevel);
                        failureCount++;
                        break;
                    case 7:
                        useraccesslevel.setLevelHelp(contraints.getNegativeValue().toString());
                        validateUserAccessLevel(contraints, useraccesslevel);
                        failureCount++;
                        break;
                    case 8:
                        useraccesslevel.setLevelIcon(contraints.getNegativeValue().toString());
                        validateUserAccessLevel(contraints, useraccesslevel);
                        failureCount++;
                        break;
                    case 9:
                        useraccesslevel.setUserAccessLevel(useraccesslevelUnique.getUserAccessLevel());
                        validateUserAccessLevel(contraints, useraccesslevel);
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
