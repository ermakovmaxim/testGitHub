package com.app.server.service.appbasicsetup.userrolemanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.appbasicsetup.userrolemanagement.AppMenusRepository;
import com.app.shared.appbasicsetup.userrolemanagement.AppMenus;
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
public class AppMenusTestCase extends EntityTestCriteria {

    /**
     * AppMenusRepository Variable
     */
    @Autowired
    private AppMenusRepository<AppMenus> appmenusRepository;

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

    private AppMenus createAppMenus(Boolean isSave) throws Exception {
        AppMenus appmenus = new AppMenus();
        appmenus.setMenuDisplay(true);
        appmenus.setMenuAction("WUTcjnoWILBNIqyXcpXVhAKFtRfALBLIsuKSqMH4QaMJXSRkIz");
        appmenus.setAppType(1);
        appmenus.setAppId("iotnGqicKJ7YEe9iQQzoMDxD2TK98bCsqMB13p8VQTotIJ42OX");
        appmenus.setMenuAccessRights(3);
        appmenus.setUiType("381");
        appmenus.setExpiryDate(new java.sql.Timestamp(1475492339518l));
        appmenus.setStartDate(new java.sql.Timestamp(1475492339518l));
        appmenus.setMenuCommands("C1wDZoUkRkMxr654Y1wS1QYmkOwLiC1wwDh6NqI1rJ1p7eLDi7");
        appmenus.setRefObjectId("wIuCS3oBvXtadP2xih1NTCy7R3CNjXn1Za87SvXakEvdcH3STs");
        appmenus.setGoLiveDate(new java.sql.Timestamp(1475492339518l));
        appmenus.setMenuLabel("1NSf3GiNe7uYTFVRH1BDwNxSivzZ0j0CzJEJHl0WCjKBEHXfrL");
        appmenus.setAutoSave(true);
        appmenus.setMenuTreeId("HXnDUpGH50yLnBDo7x9RSawO4HB628sp02koIQNrZG2DVXvCAi");
        appmenus.setMenuHead(true);
        appmenus.setMenuIcon("twOvl0PXuNywH1Jv4VrbfYZEBr0fHcDRJhWrL1zH9A5YJAFRzv");
        appmenus.setEntityValidator(entityValidator);
        return appmenus;
    }

    @Test
    public void test1Save() {
        try {
            AppMenus appmenus = createAppMenus(true);
            appmenus.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            appmenus.isValid();
            appmenusRepository.save(appmenus);
            map.put("AppMenusPrimaryKey", appmenus._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test2Update() {
        try {
            Assert.assertNotNull(map.get("AppMenusPrimaryKey"));
            AppMenus appmenus = appmenusRepository.findById((java.lang.String) map.get("AppMenusPrimaryKey"));
            appmenus.setMenuAction("bvh3Z3bGIBFyemysdy4URYHSdeEFwndBV0DDgl2Ygj38lbnBLf");
            appmenus.setAppType(1);
            appmenus.setAppId("5Vj99zF8VqgbJuWWUNl5djtqYhi7bx0dqoRgKzUnT7uCqq20tl");
            appmenus.setMenuAccessRights(7);
            appmenus.setUiType("UuO");
            appmenus.setExpiryDate(new java.sql.Timestamp(1475492339542l));
            appmenus.setStartDate(new java.sql.Timestamp(1475492339543l));
            appmenus.setMenuCommands("7doA6R2U03EvxoupP6zqIxVjQ9uQyhiOZi9qzlk5TNQMDVyFhd");
            appmenus.setRefObjectId("E3lpohwEgXTZOtzgZOchDRf6dCcBkJKAauEzxAY5Sy41hn8Wm5");
            appmenus.setGoLiveDate(new java.sql.Timestamp(1475492339544l));
            appmenus.setVersionId(1);
            appmenus.setMenuLabel("RsAtCOJebmN2lY2zikXamPRsclhzfBnP726fOYBABus3K7n9Yu");
            appmenus.setMenuTreeId("aO86dqZ0XVvTnAH12OcRViVXXcHRA8E3AM5KAEqb4vh44orPcK");
            appmenus.setMenuIcon("k5qKhrv0rezvP2TO903ULWy8VByuNrjOCCkGogT7sx8OMugVKr");
            appmenus.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            appmenusRepository.update(appmenus);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("AppMenusPrimaryKey"));
            appmenusRepository.findById((java.lang.String) map.get("AppMenusPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("AppMenusPrimaryKey"));
            appmenusRepository.delete((java.lang.String) map.get("AppMenusPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateAppMenus(EntityTestCriteria contraints, AppMenus appmenus) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            appmenus.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            appmenus.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            appmenus.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            appmenusRepository.save(appmenus);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 1, "menuTreeId", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "menuTreeId", "cpuPy5K65BS4c5cZ9FMtSyerfhrJeTafNoH1plYxfNUTLGo0cStKuFv6FyiOGvvSL5fd8XHMxkfWnaOxDX6sgL7c1fKkC9GRyN6r6RFZwXiZ3xh5MDyoZ7SKqEzJzRzOaV74hrj0wvZiNWPB59dWToLiyYVBAyGYIb33JG5zj2FpQpSNeLscnMmCzTIDd65hWMzmjGZBJNugFVcRGmkted1SNSfcFhE9sQ1x6bbZMLFSItJF0Oi8WGCgC12UfITrm"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 3, "menuIcon", "7Oxjo3GQAh9MXOkThlkYy1QVKyDIiDERznPtVYRU1EIeMjn0LC1LEpUho4oWLIEFdhDyBMTNIziMgwcqeJLZVeajR76Fji3CjfACFN0tKOftF914qtBrl2uVmjsFFJKz6p0EAnPKH5sGkWF7DLeWQlUX4HwLdnfamGKlamusAOuIU4nNRw2U9hQH5ZC9rniRbeNg7wDcJlfpWBbECPJWOkvdbLJZkdm1QbJCid1uyPxq3OL7Oqp92xL1y2a00Xk6p"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 4, "menuAction", "cu5yEiuF2Pi6o38R2Wq1kibm7gF4DkApOvwm71BC7F3WuqmLiGVkFdEJaD98Jw2qrxO1kwTHpg6Q53tidYUZUbQHGFyBO38Mei3bChiuXrNh9I1YUVJ9NI7GyfH7KL6RC5GWApyTCYlA3DuARx7grkWOvarxCoCcOSkVA7kSKkQiNlOKlEAUAVP2ea2ALF1Vho557DJscBmxpZWTnkcgCE098lrp2Vj7uAylXVAn9a38uflQS9ErzY2Dh03HbEyfL"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 5, "menuCommands", "eGdd4jYaQKTO7p3drJmPhBX4iTDlGB7r65mHmDbeT2XmRU5BXScnfB5snReECKGzD"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 6, "menuDisplay", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 7, "menuDisplay", true));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 8, "menuHead", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 9, "menuHead", true));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 10, "menuLabel", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 11, "menuLabel", "UEw6LFXtuKtUkXA9ornb3ykch5RwWb266tBwh2y9SBMRL7LEz9L2nElMAXnzdWRgbmWGfzsKaf02KT1JCFhSXE3zA0kzvd0BuNRB6VcK91V7HJ3okodV2WNRnLP0oy8dOEFuZ0FobVcAJVO43zgHYIeRVAHzUrITpactFe9NOptMivksLIa5BC5UkiS7iBZy0c70T7NtIvmeqHcs14nUTkfIAvWyXPk6WJiwyvk6xrT8ugZoF73qhGKwTMM0xVN18"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 12, "uiType", "0pZf"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 13, "refObjectId", "ufFDesdfLsXf8ExxG9t9Nbcsstp6hgOAuPvKRMRgqWi9J2CXEG1sVtWgbZC10yNxjQ8K5xSSUGPUP5AmK5WMOhpNeyKEwyK7NpJ9zrLKXEQVT0Iuw2fJL9N2Ura7344kXBpvCc6B8tWzkV15PZXpbQezRsMzdSz1EHKyAkWoPq6g5oYqhjeavmBXVQzNVOIy0IO26kT8BZCR1yPt16YaweIo5YaTFc0hwxSCWojCczjjvVqUhF65v5Wq3r3uUPDZE"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 14, "menuAccessRights", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 15, "menuAccessRights", 13));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 16, "appType", 3));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 17, "appId", "rd1NmSpsYsVqvIqUN1SJPOLiU31fpFe0EvP5kmKdQ57pcONgk6YSwYl0GtKT8GCBbQXF6gQDOyJOa71UBDBPFkFtbjQE8TPtftlM1ljyRw9mXQ2rAgksOeapqZ0Y937pU9QJfsDIHQZTxGJBP23yazEGGQX02Wx9l6jbRHxZmMy8Hhq0o4TMwGPVUL3X9kGLBTJJAVR3exF5HprchXHCXl1OdoD8mfYdHt6ERCkgqWa7RT5thxwJqIyOljykvMlRu"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 18, "autoSave", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 19, "autoSave", true));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                AppMenus appmenus = createAppMenus(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = appmenus.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        field.setAccessible(true);
                        field.set(appmenus, null);
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 2:
                        appmenus.setMenuTreeId(contraints.getNegativeValue().toString());
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 3:
                        appmenus.setMenuIcon(contraints.getNegativeValue().toString());
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 4:
                        appmenus.setMenuAction(contraints.getNegativeValue().toString());
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 5:
                        appmenus.setMenuCommands(contraints.getNegativeValue().toString());
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 6:
                        field.setAccessible(true);
                        field.set(appmenus, null);
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 7:
                        break;
                    case 8:
                        field.setAccessible(true);
                        field.set(appmenus, null);
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 9:
                        break;
                    case 10:
                        field.setAccessible(true);
                        field.set(appmenus, null);
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 11:
                        appmenus.setMenuLabel(contraints.getNegativeValue().toString());
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 12:
                        appmenus.setUiType(contraints.getNegativeValue().toString());
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 13:
                        appmenus.setRefObjectId(contraints.getNegativeValue().toString());
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 14:
                        field.setAccessible(true);
                        field.set(appmenus, null);
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 15:
                        appmenus.setMenuAccessRights(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 16:
                        appmenus.setAppType(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 17:
                        appmenus.setAppId(contraints.getNegativeValue().toString());
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 18:
                        field.setAccessible(true);
                        field.set(appmenus, null);
                        validateAppMenus(contraints, appmenus);
                        failureCount++;
                        break;
                    case 19:
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
