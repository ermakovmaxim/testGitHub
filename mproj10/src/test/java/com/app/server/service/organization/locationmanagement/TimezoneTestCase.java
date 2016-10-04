package com.app.server.service.organization.locationmanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.organization.locationmanagement.TimezoneRepository;
import com.app.shared.organization.locationmanagement.Timezone;
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
public class TimezoneTestCase extends EntityTestCriteria {

    /**
     * TimezoneRepository Variable
     */
    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

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

    private Timezone createTimezone(Boolean isSave) throws Exception {
        Timezone timezone = new Timezone();
        timezone.setGmtLabel("Ewz0hqHhn3hdcARebBDVdUSpKBGK1KyjcnGdDI8aNz15t8xFQD");
        timezone.setTimeZoneLabel("Gyz4qbZGdSBXuOeLrUR8b6e7NzdeppKtXRxzD4aaJbpvoPQ8wZ");
        timezone.setUtcdifference(2);
        timezone.setCountry("e0C865f7elSXTeocXZoSmbEQ9luRIhE6ki98bfrsfFlpIHBUDD");
        timezone.setCities("YIoYsTC7vxOdoTr6smwQ3neCgpmgcNXicTufWNpIaNCxtCIVwp");
        timezone.setEntityValidator(entityValidator);
        return timezone;
    }

    @Test
    public void test1Save() {
        try {
            Timezone timezone = createTimezone(true);
            timezone.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            timezone.isValid();
            timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test2Update() {
        try {
            Assert.assertNotNull(map.get("TimezonePrimaryKey"));
            Timezone timezone = timezoneRepository.findById((java.lang.String) map.get("TimezonePrimaryKey"));
            timezone.setVersionId(1);
            timezone.setGmtLabel("pp1GIbQWAuZmUsjCjDoKSAhZG2oFjbbA09irDWgRtDtaDsERmS");
            timezone.setTimeZoneLabel("naZLBcoztmGximYnOFdOLq3cR9VieMv3UYmLmieNn98uulY9RT");
            timezone.setUtcdifference(11);
            timezone.setCountry("ZnoJuJhnw5zup02Z3Ome7YcMfqTngzxhT9cF9Vuuu9saXdAXJM");
            timezone.setCities("A912MxtUK5NiIJXKtRuDbjZ54XYlCC6R31e4JkyzmkgntrLsGY");
            timezone.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            timezoneRepository.update(timezone);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("TimezonePrimaryKey"));
            timezoneRepository.findById((java.lang.String) map.get("TimezonePrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("TimezonePrimaryKey"));
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateTimezone(EntityTestCriteria contraints, Timezone timezone) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            timezone.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            timezone.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            timezone.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            timezoneRepository.save(timezone);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 1, "utcdifference", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "utcdifference", 14));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 3, "gmtLabel", "liYiUD1RWof3mhP7zhoex5UU0zI0H18sSVmMpHiu9QFAog4r1AlJtUnrR2dKAnwnU3CuApUtr5KaOW80oteD5qeic72MfTRhUToLA9KFbZuXBNWWFtJDRByAiSRFx3xSZMW4TD1SL99FhRt49V6SItFAj5hkIozOJvLQnrsavXIhWzxR9gyQRAi4eTqmk8OyjN2V6Z6IIlDk73yV5iqdw2syQWOUVB7Y2Bhbx0p7T2AUfOXLuJuHtncLVITku8VP6"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 4, "timeZoneLabel", "vTTwA2ndtRhN5odLAFlzyRww2R0u7FY24gwPisvvn4cwoqaw4EyzpTNiBNjiXZZJ2GI7QoOR2O1JQSYuGbWLLZu5OJWgROktUiBI4Ng4ltGjG4rCPtfBi8dIuB7w5fy3iGzVTjPLkXo02HrftkEjNBEKOVg0NZoKDO72ffw6vmu88KCLanQLOt7AfpfrxxUkcqgDhcQTdiM288eWDtFVfWjudrzTlfFcawinKtTBC4go6OtTlTzd8zbF3N3iH68TA"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 5, "country", "91h09kaOcN3iLtZtlSy8NZGluf9ZXPEvGunNuo0oiVLAN87Da7AbTbBO65whvkBub4ljR7P7wSWKRpgQmzqOEnfsnobtFQYwxJFqbBtigsVC6WAk1c4T2ztCwf3OPY94ax3CxpCwUzyznuCmlUqD8jF6CWKnkYtLnYN7Cg0FspzEL4Pi2e0mbWu27LgCvPiMeXZVTmbwV64Zik1Hl5oHenzlSmKmdy0mKFai8Wr77sNlPHBmivb6aqOZm4e5VXA4c"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 6, "cities", "UoVWHs7UnLAbLom5KwDqdMADsw97IZGq66UypwnVTNQBY8CiaJUmhwnS0enkgwJCRik2Q5r2mxoYkYvhe0wlVoJ7y95X2uDPEgliLrmvn3k91RY7xX3UM3a9txqb47hhO5O7NoW2qhfyjFyibM6AagUk1gSrbJdKrfD5iNPvXlPk9FAqs2UeFda6QHba298AiMQ5a0G6FM0ou0YN6lvM6bAsWuFKB3Zr7GOOg5uduuY39CTtwMyT4j4YrDmKkhpRq"));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                Timezone timezone = createTimezone(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = timezone.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        field.setAccessible(true);
                        field.set(timezone, null);
                        validateTimezone(contraints, timezone);
                        failureCount++;
                        break;
                    case 2:
                        timezone.setUtcdifference(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateTimezone(contraints, timezone);
                        failureCount++;
                        break;
                    case 3:
                        timezone.setGmtLabel(contraints.getNegativeValue().toString());
                        validateTimezone(contraints, timezone);
                        failureCount++;
                        break;
                    case 4:
                        timezone.setTimeZoneLabel(contraints.getNegativeValue().toString());
                        validateTimezone(contraints, timezone);
                        failureCount++;
                        break;
                    case 5:
                        timezone.setCountry(contraints.getNegativeValue().toString());
                        validateTimezone(contraints, timezone);
                        failureCount++;
                        break;
                    case 6:
                        timezone.setCities(contraints.getNegativeValue().toString());
                        validateTimezone(contraints, timezone);
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
