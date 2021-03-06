package com.app.server.service.organization.contactmanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.organization.contactmanagement.PhoneCategoryRepository;
import com.app.shared.organization.contactmanagement.PhoneCategory;
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
public class PhoneCategoryTestCase extends EntityTestCriteria {

    /**
     * PhoneCategoryRepository Variable
     */
    @Autowired
    private PhoneCategoryRepository<PhoneCategory> phonecategoryRepository;

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

    private PhoneCategory createPhoneCategory(Boolean isSave) throws Exception {
        PhoneCategory phonecategory = new PhoneCategory();
        phonecategory.setPhoneCatName("Wzm3q5jk7aR2OOPcxq5OuTECy4lPOiYCgrPKWxfQOx19wTNWlH");
        phonecategory.setEntityValidator(entityValidator);
        return phonecategory;
    }

    @Test
    public void test1Save() {
        try {
            PhoneCategory phonecategory = createPhoneCategory(true);
            phonecategory.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            phonecategory.isValid();
            phonecategoryRepository.save(phonecategory);
            map.put("PhoneCategoryPrimaryKey", phonecategory._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test2Update() {
        try {
            Assert.assertNotNull(map.get("PhoneCategoryPrimaryKey"));
            PhoneCategory phonecategory = phonecategoryRepository.findById((java.lang.String) map.get("PhoneCategoryPrimaryKey"));
            phonecategory.setPhoneCatName("VZ5duXcNE0Pp6kLwNOjya7FfSgzDqdIyMXhmur5RQ2XST8IqdD");
            phonecategory.setVersionId(1);
            phonecategory.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            phonecategoryRepository.update(phonecategory);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("PhoneCategoryPrimaryKey"));
            phonecategoryRepository.findById((java.lang.String) map.get("PhoneCategoryPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("PhoneCategoryPrimaryKey"));
            phonecategoryRepository.delete((java.lang.String) map.get("PhoneCategoryPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validatePhoneCategory(EntityTestCriteria contraints, PhoneCategory phonecategory) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            phonecategory.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            phonecategory.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            phonecategory.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            phonecategoryRepository.save(phonecategory);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 1, "phoneCatName", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "phoneCatName", "ILPZ2ZTawCksLxRPzpykuZdl93hfLoGfP1a3R9cISSEf4jTe72i3Q3B1QjJUPIgv2zDa9baiiOgQYp1FxLMaFYZPI4o3czmLJMEYxzkHgMM5uLq0KWQTidcDwmN6hctTc3vbphWddtWYUIsSz97oAozpLWCQuxjye5JZPBjLHwtyXFk5yYrvC6m6NbJwjar9L9rvLMu2CQLm7avC2LYKpnGUcdyuvGMPbWNMCrXy8kk06dN13FpfctEevGd74Yx1w"));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                PhoneCategory phonecategory = createPhoneCategory(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = phonecategory.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        field.setAccessible(true);
                        field.set(phonecategory, null);
                        validatePhoneCategory(contraints, phonecategory);
                        failureCount++;
                        break;
                    case 2:
                        phonecategory.setPhoneCatName(contraints.getNegativeValue().toString());
                        validatePhoneCategory(contraints, phonecategory);
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
