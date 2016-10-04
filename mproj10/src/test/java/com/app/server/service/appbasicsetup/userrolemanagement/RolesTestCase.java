package com.app.server.service.appbasicsetup.userrolemanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.appbasicsetup.userrolemanagement.RolesRepository;
import com.app.shared.appbasicsetup.userrolemanagement.Roles;
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
import com.app.shared.appbasicsetup.userrolemanagement.RoleMenuBridge;
import com.app.shared.appbasicsetup.userrolemanagement.AppMenus;
import com.app.server.repository.appbasicsetup.userrolemanagement.AppMenusRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = { com.app.config.JPAConfig.class, com.app.config.WebConfigExtended.class })
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class RolesTestCase extends EntityTestCriteria {

    /**
     * RolesRepository Variable
     */
    @Autowired
    private RolesRepository<Roles> rolesRepository;

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

    private Roles createRoles(Boolean isSave) throws Exception {
        Roles roles = new Roles();
        roles.setRoleDescription("W13jH5ka2QDldcdhhIZnX3x3VG0U1OE2eGJozaXInz54i0BCK0");
        roles.setRoleIcon("BqDeQPpoNYHOtzYcc4gwPAtg5MBS9iMFD0NsWCZHPZDp35xdyp");
        roles.setRoleName("WvmG4PVWcVzLRl3sP3ov6ryhZdsu6bFebC5loal8yqgwAa7kBY");
        roles.setRoleHelp("WaGJ8oczWlgcv3Di7yiNgSonrgzJ94d63gO9v0CZRB8bROJlSz");
        java.util.List<RoleMenuBridge> listOfRoleMenuBridge = new java.util.ArrayList<RoleMenuBridge>();
        RoleMenuBridge rolemenubridge = new RoleMenuBridge();
        AppMenus appmenus = new AppMenus();
        appmenus.setMenuDisplay(true);
        appmenus.setMenuAction("mTDqq1w7zeLxZcGepX3pIchP26Ku22NPSuuQrYvgxrYh4JxCu9");
        appmenus.setAppType(2);
        appmenus.setAppId("SUCL1Xl1Uq6YG5nw7vv4DEoa40SKvDmH3RHyVk78ZqYM0fp2ws");
        appmenus.setMenuAccessRights(7);
        appmenus.setUiType("Cad");
        appmenus.setExpiryDate(new java.sql.Timestamp(1475492338779l));
        appmenus.setStartDate(new java.sql.Timestamp(1475492338779l));
        appmenus.setMenuCommands("dbXWDimCWMQOdLMcFXXbJbrsGPYu71N3EzWUOO9yDPk7sy0twB");
        appmenus.setRefObjectId("xNADduvPgWUA36uxNkHzEgfW6gKux6yCqQO7PPE8A0jwO3b8Dp");
        appmenus.setGoLiveDate(new java.sql.Timestamp(1475492338779l));
        appmenus.setMenuLabel("LzOhXM1grbs0MSUW75vVcyCWw3kGOZa7EDHG3sKcjzrc3EloTN");
        appmenus.setAutoSave(true);
        appmenus.setMenuTreeId("Nw2UCRqVcjSnujmq21KZQAeEtuB6zi2Zs71zYqpMjx3VvYPgue");
        appmenus.setMenuHead(true);
        appmenus.setMenuIcon("HpLjgoUKoBSsmXl1JyPNrAz3mdMheM6UFPkrSTSRpMsb0asitG");
        AppMenus AppMenusTest = new AppMenus();
        if (isSave) {
            AppMenusTest = appmenusRepository.save(appmenus);
            map.put("AppMenusPrimaryKey", appmenus._getPrimarykey());
        }
        rolemenubridge.setRoles(roles);
        rolemenubridge.setIsRead(true);
        rolemenubridge.setIsWrite(true);
        rolemenubridge.setMenuId((java.lang.String) AppMenusTest._getPrimarykey());
        rolemenubridge.setIsExecute(true);
        listOfRoleMenuBridge.add(rolemenubridge);
        roles.addAllRoleMenuBridge(listOfRoleMenuBridge);
        roles.setEntityValidator(entityValidator);
        return roles;
    }

    @Test
    public void test1Save() {
        try {
            Roles roles = createRoles(true);
            roles.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            roles.isValid();
            rolesRepository.save(roles);
            map.put("RolesPrimaryKey", roles._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private AppMenusRepository<AppMenus> appmenusRepository;

    @Test
    public void test2Update() {
        try {
            Assert.assertNotNull(map.get("RolesPrimaryKey"));
            Roles roles = rolesRepository.findById((java.lang.String) map.get("RolesPrimaryKey"));
            roles.setRoleDescription("V2pdIHmiVLLbNgHrLc1XbUTqqzRGyTUOqXJk8izuCtCFmlH8Gx");
            roles.setVersionId(1);
            roles.setRoleIcon("zEVFlusJXoKdY9QfAB0JcKdLai6dbA28U8LUmpaWsRfCWcxzyJ");
            roles.setRoleName("R6ayWHtvJyYWZuTnv6goVreLwnxQgVFC9v6fAvAl41lLIwbWSS");
            roles.setRoleHelp("cT0RTZogdIz39UiBJElnBCqibqoyY7Zdf9f78TZ3N78OaCH5z4");
            roles.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            rolesRepository.update(roles);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("RolesPrimaryKey"));
            rolesRepository.findById((java.lang.String) map.get("RolesPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("RolesPrimaryKey"));
            rolesRepository.delete((java.lang.String) map.get("RolesPrimaryKey")); /* Deleting refrenced data */
            appmenusRepository.delete((java.lang.String) map.get("AppMenusPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateRoles(EntityTestCriteria contraints, Roles roles) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            roles.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            roles.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            roles.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            rolesRepository.save(roles);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 1, "RoleName", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "roleName", "oV6UKSHXh8x1Xt7mFJZz6KQzrnD8ixMGd1vTVyfwH6vM7y3VWz4nApyvAq7b9AzBwEImlwdg3Hl9xfYuxbUycKOZmLSiZrlEduezvXSg3zfkY3sAaVde30rWBaWbuaxYXrg187V4XWVLhG8Z230CTUKkjk3bRZKUVoSErT3czKTacoF2Ir9UHzHOgSpFMnMJLzTlRCN1J30JUJR1WVyT6fL1cuVBi3bQ7qom40303XKWhrZPUoFvPA8o6cbvcPu9N"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 3, "RoleDescription", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 4, "roleDescription", "NmfHjK4PtbPQ4Uv3pCgXAneC06Q0s1hZQtMZaxliROGvH1GPBUiYQhw8nsl5WEicjRbpq0GwlnDOhytHFmzvXq9oqlUvfhTUx26s5y1jS4AKlchnwA5VEaQM3inUXN0zW71ig4VKKohJFaxXiCOZVvmih9ueylEd6K0sbmo7vTRar2YDsIMEQ1A1ioqDqq5VJhfV3ZbydfA3HvJ8iEFqNcTJOnd4EqTdqpmazmvNWrPnk5Srgpne0IAyKcw3FSFqw"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 5, "roleIcon", "oXwVp98uVq9R9WMBjSeFru6Qyjp4v1J9QrJAT23Ln6RxGzJiLfYNTpBDIz5BBBrSg"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 6, "roleHelp", "o4ITn4IvRCcTkArpYyA5oMZ8w6s9LjnefFBDDPmyxpMR7pcbaoTNR58EafMARnqCS22itFGuC3zORncL3jl7iOfIl8YO6uKF6n2xYLznydpHqWln6tmwoVxmFwqKKGLLpOGxFCyizrWa02PKVrflX2W9iKUR3lQ0QsMg1uJv1cV8EDHlUclURd49cR1qirghYnOU88z4memcsDyA1k261DOinY05QxPE7mRVkQG8KrowcFyJw2OYYSabBv72YjzLb"));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                Roles roles = createRoles(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = roles.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        field.setAccessible(true);
                        field.set(roles, null);
                        validateRoles(contraints, roles);
                        failureCount++;
                        break;
                    case 2:
                        roles.setRoleName(contraints.getNegativeValue().toString());
                        validateRoles(contraints, roles);
                        failureCount++;
                        break;
                    case 3:
                        field.setAccessible(true);
                        field.set(roles, null);
                        validateRoles(contraints, roles);
                        failureCount++;
                        break;
                    case 4:
                        roles.setRoleDescription(contraints.getNegativeValue().toString());
                        validateRoles(contraints, roles);
                        failureCount++;
                        break;
                    case 5:
                        roles.setRoleIcon(contraints.getNegativeValue().toString());
                        validateRoles(contraints, roles);
                        failureCount++;
                        break;
                    case 6:
                        roles.setRoleHelp(contraints.getNegativeValue().toString());
                        validateRoles(contraints, roles);
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
