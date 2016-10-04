package com.app.server.service.organization.locationmanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.organization.locationmanagement.StateRepository;
import com.app.shared.organization.locationmanagement.State;
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
import com.app.shared.organization.locationmanagement.Country;
import com.app.server.repository.organization.locationmanagement.CountryRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = { com.app.config.JPAConfig.class, com.app.config.WebConfigExtended.class })
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class StateTestCase extends EntityTestCriteria {

    /**
     * StateRepository Variable
     */
    @Autowired
    private StateRepository<State> stateRepository;

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

    private State createState(Boolean isSave) throws Exception {
        Country country = new Country();
        country.setCountryName("bIdHrIhiS0uzHFaQGbeLrrPKcR0CpuNvWZaEZBT0Jr8LOI8m6c");
        country.setCapitalLatitude(6);
        country.setCapitalLongitude(11);
        country.setCurrencyCode("6e9");
        country.setCountryFlag("M69dh2NbuV5quaNGYtQmDliAnXLTy20K9t1sYSSlw9frPsoQjS");
        country.setCountryCode1("fCZ");
        country.setCurrencyName("irbPEYwsoMqHpO8aJJeK6HRY6cprGdx6CBIW4RboMEjAQpiIkE");
        country.setIsoNumeric(4);
        country.setCurrencySymbol("2KuGGefOXUjPY0c9uglYBJiHlGyOeuyj");
        country.setCountryCode2("gqx");
        country.setCapital("bYwiOkYvveX4O9k09TRofTDVU6qKfNjn");
        Country CountryTest = new Country();
        if (isSave) {
            CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
        }
        State state = new State();
        state.setStateCapital("2Qs7Wkgu2bAQeleSXomnUlWVfwI1sO7VPOKtc4iGPAMFh1bFEa");
        state.setStateCode(2);
        state.setStateDescription("Y1uqFC4zHzt32A89YbDEx5SJyd8v07lfQI8mXksvjdw5FnEmUk");
        state.setStateCapitalLongitude(9);
        state.setStateFlag("cG6XF49TMs50l6ZAmOGB0jA4iuMsZDmDyTz4v7DbS1D6thSSSa");
        state.setStateName("ETsjoB0UXz8czXAbdHVr7kyMrlKgspwqm0Xls3yQFaIg4VXwQg");
        state.setStateCodeChar2("0nAAKJAFWdSg1jeTIgsl0JZxd8MwnveE");
        state.setCountryId((java.lang.String) CountryTest._getPrimarykey());
        state.setStateCodeChar3("YqfZgtUwy87TGhICNmca7HSOPgcwmak4");
        state.setStateCapitalLatitude(9);
        state.setEntityValidator(entityValidator);
        return state;
    }

    @Test
    public void test1Save() {
        try {
            State state = createState(true);
            state.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            state.isValid();
            stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Test
    public void test2Update() {
        try {
            Assert.assertNotNull(map.get("StatePrimaryKey"));
            State state = stateRepository.findById((java.lang.String) map.get("StatePrimaryKey"));
            state.setStateCapital("Tabtbsw18tBgxgVTnN8OR7gR2RlnE4NF6PwBPNakSpG3KvfPjw");
            state.setVersionId(1);
            state.setStateCode(1);
            state.setStateDescription("1p8DlsqKxOujEwF67PiEYzWVTo364B5MlnDbBsrnNjbKEUmlPM");
            state.setStateCapitalLongitude(9);
            state.setStateFlag("J3yrCsP0eMHIy85yBWDbXM3ju9hZxPNV6hyWexcVkz3qhDmbLk");
            state.setStateName("eBqcZE6cbPNLrfuK4n6FGFFVgDqYgV4d6zwLpPY5PzxoHsNydi");
            state.setStateCodeChar2("wMHaejeBJ7Rib9rplZqVLTiffjsFgjKF");
            state.setStateCodeChar3("IJy2OUy2gXZzVidfxD4GCsQxGzl3Hi4I");
            state.setStateCapitalLatitude(9);
            state.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            stateRepository.update(state);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("StatePrimaryKey"));
            stateRepository.findById((java.lang.String) map.get("StatePrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<State> listofcountryId = stateRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountryId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("StatePrimaryKey"));
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateState(EntityTestCriteria contraints, State state) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            state.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            state.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            state.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            stateRepository.save(state);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 1, "stateName", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "stateName", "Kp41U0wWi5G5x1F0AXPcwDvnhpikLVwNkly5eIHxfYiDlQoqS0pyrtinmbn9dBFO4ygsIqlOEFoggbgR86nmqNx2C2hdkxvtJnu0rNWRF4T44iddbe6mNuXpzHtchgL31eqGkRTpZYZdYf2jhzhVPsH0LrghFXJR5Q0xoJb6A3K601H77TgSug7NmVkTRmdhr0udWwMCQnEkb9IbB7hPH01ckVtmYcuNqIjdbimFJMTi9fuAnT9XeeVxYG8dbJeGs"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 3, "stateCode", 4));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 4, "stateCodeChar2", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 5, "stateCodeChar2", "qbNGbwBzm53iLaeoVppzswjk5unLDmssV"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 6, "stateCodeChar3", "RGtY2VAoJV7PGmQzWrr3ikgUxeV0Zot3o"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 7, "stateDescription", "VU1k0Acp5y62AyjsCEBjMqgx1d7juxjYEekBaJvKkfa9bw0XDyK9A17wNM40OGWkqzzEvLibehM1MASADA8OkTwUby94rihsc4gdVCXCN9wNkWusLHRC3qztPk8k7NzeHH522OPugJqajYNdX3W9J0nsKGxiA1q68nQ3tIA7lLDklSO1HQqAKtN4FVdAYMV8BU4LHgMTcmGNhdGxazFQqyZVaOVOMtDaO5jfgFtOXEnfxrrmdWYQDpep0W5KEruRO"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 8, "stateFlag", "FtjRXveW7NNZJEEd7s9MX76heUQEMZc9tiEtbXDZCWLsbcuTLFi6p1WIDl3bDcK5Cmu57raKNbNexWXJym7ZHL7OsSFJxwTAHW7tUmuFdq79wypGp8v9MnoOsyWuwXlFH"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 9, "stateCapital", "Y8t7DM6MsDd472223uEDyhVIXXY576t7ObZktCRVMBVwlzAjTwuShjbVqYoGbRziKbw3dOwQUkFh8Btf8wGvfXBE6dRphzvyhO6APjdMCEvL34JgmcM0Tjor40o68tc0F"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 10, "stateCapitalLatitude", 12));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 11, "stateCapitalLongitude", 14));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                State state = createState(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = state.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        field.setAccessible(true);
                        field.set(state, null);
                        validateState(contraints, state);
                        failureCount++;
                        break;
                    case 2:
                        state.setStateName(contraints.getNegativeValue().toString());
                        validateState(contraints, state);
                        failureCount++;
                        break;
                    case 3:
                        state.setStateCode(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateState(contraints, state);
                        failureCount++;
                        break;
                    case 4:
                        field.setAccessible(true);
                        field.set(state, null);
                        validateState(contraints, state);
                        failureCount++;
                        break;
                    case 5:
                        state.setStateCodeChar2(contraints.getNegativeValue().toString());
                        validateState(contraints, state);
                        failureCount++;
                        break;
                    case 6:
                        state.setStateCodeChar3(contraints.getNegativeValue().toString());
                        validateState(contraints, state);
                        failureCount++;
                        break;
                    case 7:
                        state.setStateDescription(contraints.getNegativeValue().toString());
                        validateState(contraints, state);
                        failureCount++;
                        break;
                    case 8:
                        state.setStateFlag(contraints.getNegativeValue().toString());
                        validateState(contraints, state);
                        failureCount++;
                        break;
                    case 9:
                        state.setStateCapital(contraints.getNegativeValue().toString());
                        validateState(contraints, state);
                        failureCount++;
                        break;
                    case 10:
                        state.setStateCapitalLatitude(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateState(contraints, state);
                        failureCount++;
                        break;
                    case 11:
                        state.setStateCapitalLongitude(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateState(contraints, state);
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
