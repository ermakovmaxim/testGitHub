package com.app.server.service.appbasicsetup.usermanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.appbasicsetup.usermanagement.UserAccessDomainRepository;
import com.app.shared.appbasicsetup.usermanagement.UserAccessDomain;
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
public class UserAccessDomainTestCase extends EntityTestCriteria {

    /**
     * UserAccessDomainRepository Variable
     */
    @Autowired
    private UserAccessDomainRepository<UserAccessDomain> useraccessdomainRepository;

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

    private UserAccessDomain createUserAccessDomain(Boolean isSave) throws Exception {
        UserAccessDomain useraccessdomain = new UserAccessDomain();
        useraccessdomain.setDomainIcon("PDBhTwRkCo8oaVC7MzgtcN03CNn655rFa26uLF8oWspdRIsvNm");
        useraccessdomain.setUserAccessDomain(valueGenerator.getRandomInteger(99999, 0));
        useraccessdomain.setDomainDescription("Ub3SyuwhDkT9BbNFakZG1z6fCdLvGukL4AoRvPNIrKtwrAK2ya");
        useraccessdomain.setDomainHelp("uAwoxZ7L9c9Fg1bPwMN6ogEoctH3TTKtKup7lN383fkYiba3hM");
        useraccessdomain.setDomainName("lESJJto52RbsJbzQLd3Ung8HIbGFbFp3xN4MsxSwF4UL6xDK6w");
        useraccessdomain.setEntityValidator(entityValidator);
        return useraccessdomain;
    }

    @Test
    public void test1Save() {
        try {
            UserAccessDomain useraccessdomain = createUserAccessDomain(true);
            useraccessdomain.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            useraccessdomain.isValid();
            useraccessdomainRepository.save(useraccessdomain);
            map.put("UserAccessDomainPrimaryKey", useraccessdomain._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test2Update() {
        try {
            Assert.assertNotNull(map.get("UserAccessDomainPrimaryKey"));
            UserAccessDomain useraccessdomain = useraccessdomainRepository.findById((java.lang.String) map.get("UserAccessDomainPrimaryKey"));
            useraccessdomain.setVersionId(1);
            useraccessdomain.setDomainIcon("bT4PJsS4EOzwklj5xmsirKqFZBrbWgoe5o4kBmbRHM5b3lJjpD");
            useraccessdomain.setUserAccessDomain(79929);
            useraccessdomain.setDomainDescription("MlOiMjNqp2Z12GPxOSDCAjBHNpKTqN5DOOhMYMendO6gm8ippo");
            useraccessdomain.setDomainHelp("ZTbI9Ms1EiwwU2pUBiDT7XDOtHo1KCOpoxWfua58bpLKeuou2a");
            useraccessdomain.setDomainName("Nsu0CkkK0fRxJDukULq0Th3kIlp78fA6GvlldzDKvOcvyY3LsY");
            useraccessdomain.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            useraccessdomainRepository.update(useraccessdomain);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("UserAccessDomainPrimaryKey"));
            useraccessdomainRepository.findById((java.lang.String) map.get("UserAccessDomainPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("UserAccessDomainPrimaryKey"));
            useraccessdomainRepository.delete((java.lang.String) map.get("UserAccessDomainPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateUserAccessDomain(EntityTestCriteria contraints, UserAccessDomain useraccessdomain) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            useraccessdomain.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            useraccessdomain.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            useraccessdomain.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            useraccessdomainRepository.save(useraccessdomain);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 1, "userAccessDomain", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "userAccessDomain", 117190));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 3, "domainName", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 4, "domainName", "44vTfFJJWCZbHritkoFHqioG6mTDxIYHMmpg1snMP9hELwfkpACtiSgPzVaGn9TlyxdrF6UQxd3NNYglvgEkfUz5zaAM1zAcZ6W4dGTvRBfpv6eysLBRne9dESmXCH6WmON6DgTGnnd574pHnGIRibYJlu2w9jr17brdlWnlaqVSD6fKP7Zs6Gz4lEDZ93XRLpoYnizz4qUIJLEJjek4i93AsO1pDYYnz5bUA1XEBdXFYZC7oRuC681bqLJ4PQlQy"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 5, "domainDescription", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 6, "domainDescription", "z9yaiegm198aikiofEWUQrUO6yIQ8G4lCeGVj0Ogy6SXLgxu8ROYibLcXnMIS5YlrneE4fm1UvcB5aMvXcHKT39UtXZzQthUo7HK4gbMsTueeTHTbTXjiVPmI0mOBWJn0fo3q70EVq3GE1Pvk3rbc411uI29aIrnLfCSEoTGIZVyjXU1gxdIn1xHpsLrhbP18VS5MDMpbXc4QT34E3MWOL1Zm9BDAmW8YykgTSzMcV5AMpty9PMvd4LImgTOKQAyv"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 7, "domainHelp", "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"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 8, "domainIcon", "K15bqtKlRRYDKgKwFmrqIOd9dXI9w8FSViKrdBS535O1SBGPmnerMObGIQKDopFlQQb7IzuHGz2CPy57zQ4aKxzf1mumWYsIQBMJ5QFhbvpUvrDpFzSSO0fypfOmWugOlH4bi711l055yLyhtGs4GI1SjPDCgZgNeR2leWo9LnyAklfOIFYMGym8SwKyKu8rTiASegXAmgUevDzfxHtMBZwAaAaMUStWmGcMYlbamagz97OI5eIk91E2IFyl0Uoek"));
        entityConstraints.add(new EntityTestCriteria(UNIQUE, 9, "CombineUniqueKey", ""));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        UserAccessDomain useraccessdomainUnique = useraccessdomainRepository.findById((java.lang.String) map.get("UserAccessDomainPrimaryKey"));
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                UserAccessDomain useraccessdomain = createUserAccessDomain(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = useraccessdomain.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        field.setAccessible(true);
                        field.set(useraccessdomain, null);
                        validateUserAccessDomain(contraints, useraccessdomain);
                        failureCount++;
                        break;
                    case 2:
                        useraccessdomain.setUserAccessDomain(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateUserAccessDomain(contraints, useraccessdomain);
                        failureCount++;
                        break;
                    case 3:
                        field.setAccessible(true);
                        field.set(useraccessdomain, null);
                        validateUserAccessDomain(contraints, useraccessdomain);
                        failureCount++;
                        break;
                    case 4:
                        useraccessdomain.setDomainName(contraints.getNegativeValue().toString());
                        validateUserAccessDomain(contraints, useraccessdomain);
                        failureCount++;
                        break;
                    case 5:
                        field.setAccessible(true);
                        field.set(useraccessdomain, null);
                        validateUserAccessDomain(contraints, useraccessdomain);
                        failureCount++;
                        break;
                    case 6:
                        useraccessdomain.setDomainDescription(contraints.getNegativeValue().toString());
                        validateUserAccessDomain(contraints, useraccessdomain);
                        failureCount++;
                        break;
                    case 7:
                        useraccessdomain.setDomainHelp(contraints.getNegativeValue().toString());
                        validateUserAccessDomain(contraints, useraccessdomain);
                        failureCount++;
                        break;
                    case 8:
                        useraccessdomain.setDomainIcon(contraints.getNegativeValue().toString());
                        validateUserAccessDomain(contraints, useraccessdomain);
                        failureCount++;
                        break;
                    case 9:
                        useraccessdomain.setUserAccessDomain(useraccessdomainUnique.getUserAccessDomain());
                        validateUserAccessDomain(contraints, useraccessdomain);
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
