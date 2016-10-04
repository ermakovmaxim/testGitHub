package com.app.server.service.organization.locationmanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.organization.locationmanagement.CityRepository;
import com.app.shared.organization.locationmanagement.City;
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
import com.app.shared.organization.locationmanagement.State;
import com.app.server.repository.organization.locationmanagement.StateRepository;
import com.app.shared.organization.locationmanagement.Country;
import com.app.server.repository.organization.locationmanagement.CountryRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = { com.app.config.JPAConfig.class, com.app.config.WebConfigExtended.class })
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CityTestCase extends EntityTestCriteria {

    /**
     * CityRepository Variable
     */
    @Autowired
    private CityRepository<City> cityRepository;

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

    private City createCity(Boolean isSave) throws Exception {
        State state = new State();
        state.setStateCapital("8wpfiZD0tCbSDpkaDh0FuPGatWSytDPJVUDUHBvhft5XchOA5q");
        state.setStateCode(1);
        state.setStateDescription("4tYmhuQReHxFm8vXTxSiNpuzURVZOaZa0VmvvbHM81JuLUtgjX");
        state.setStateCapitalLongitude(5);
        state.setStateFlag("rPptLmRaghtMS8JnIyVwRXN0fhkgX6NJdrighUsZbA4U6stflX");
        state.setStateName("Kp4O5kf0UgA4Yu6pGJzJ7oGTdQx2k0rkbF0PuRJyWOZ6femomC");
        state.setStateCodeChar2("FOsIROKlWTcILGpp2RH9XGcMDPyVROYy");
        Country country = new Country();
        country.setCountryName("dFzNCCOxHyCg1YroIhujqc3PKMKtOKLpG5Lwso6KtshGNaQPEW");
        country.setCapitalLatitude(2);
        country.setCapitalLongitude(3);
        country.setCurrencyCode("VE8");
        country.setCountryFlag("vGs4qVqc8Ns6n01eFqZeA6zOvJaU1FRp67ZY4vFKMUqiQJ85OC");
        country.setCountryCode1("dd1");
        country.setCurrencyName("gHIHKyHw9NLEwqJsJMIiHDt44kb8DtHhpIjOU0Ys62ZdwgraU5");
        country.setIsoNumeric(663);
        country.setCurrencySymbol("5X26StF37KFZm4TYlmF1qNxOX0oCpRur");
        country.setCountryCode2("fsP");
        country.setCapital("AVdahqmX287cQG0JX9TKZv2rxMt5AQyL");
        Country CountryTest = new Country();
        if (isSave) {
            CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
        }
        state.setStateCapital("NhoPKKqKpbMNNyedIQWDl9GxjXNXhudgY6CXfhq2JMfVPya0tk");
        state.setStateCode(2);
        state.setStateDescription("GIqGxTOc7KgDoOd5gP2lh30Od7ZEjzEWakdt4yJiuVyov7AtLz");
        state.setStateCapitalLongitude(5);
        state.setStateFlag("mutuTFQdfBGOtiarcrTJ4xealo7kbG9XvqOomhZzQH2oBa47Sl");
        state.setStateName("HNDNmjXcEhtPK76OdvIHEEYjoysQOejAZvXrPrYykbBp91BcJk");
        state.setStateCodeChar2("krDu2Yi87S1R4jHXmpfquDM78Dyyf3Dk");
        state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
        state.setStateCodeChar3("ln0bIk1qjsywXMcu0DPr9Pn1SrtIqUw3");
        state.setStateCapitalLatitude(1);
        State StateTest = new State();
        if (isSave) {
            StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
        }
        City city = new City();
        city.setCityCode(1);
        city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
        city.setCityFlag("w0OHvXzwd2dvJ3lihX5ChXiA9rufESkbq7QcM7qwr0iZatmJEI");
        city.setCityDescription("OVIfPPwTcJsOpcxM0ydSWqPvdS0u7v3hHiOHttE2hmPPEFQayM");
        city.setCountryId((java.lang.String) CountryTest._getPrimarykey());
        city.setCityCodeChar2("nAKQDLcOpOF8UD6vbRoME3OcbX2Ye1UV");
        city.setCityLatitude(10);
        city.setCityName("CPGiEpfXCMOe6O9Dxl26rRTKuqExqiotLHSkxsrj3Ea6QEr6m5");
        city.setCityLongitude(5);
        city.setEntityValidator(entityValidator);
        return city;
    }

    @Test
    public void test1Save() {
        try {
            City city = createCity(true);
            city.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            city.isValid();
            cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private StateRepository<State> stateRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Test
    public void test2Update() {
        try {
            Assert.assertNotNull(map.get("CityPrimaryKey"));
            City city = cityRepository.findById((java.lang.String) map.get("CityPrimaryKey"));
            city.setCityCode(3);
            city.setCityFlag("C45BgT4ASJZvzIk4ci3Voldtdopm4MPDe5jEfr10nrbXtihH6n");
            city.setCityDescription("3PUd4XBhrdqyGxK9emOEGwohaVyam17uZf6hAlhC1sbztV87Sc");
            city.setVersionId(1);
            city.setCityCodeChar2("3rAL6k1ogNPKpILyTw2xt9i9VjPq8IgK");
            city.setCityLatitude(11);
            city.setCityName("egvewOH5PRH5TNqVJ1oWYoQpWkacBKL9YPRZQ1TP4Oic2ziH1W");
            city.setCityLongitude(8);
            city.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            cityRepository.update(city);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBystateId() {
        try {
            java.util.List<City> listofstateId = cityRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
            if (listofstateId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<City> listofcountryId = cityRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountryId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("CityPrimaryKey"));
            cityRepository.findById((java.lang.String) map.get("CityPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("CityPrimaryKey"));
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateCity(EntityTestCriteria contraints, City city) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            city.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            city.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            city.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            cityRepository.save(city);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 1, "cityName", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "cityName", "OV9kaYNIrGZD8fFxgIjbqhRhjeTyzDjt6Ap0PkOWW75epXp5GXjPoKiX8p7RlaJghp36OS7zBBm4DglNEK0GDfFKnem3j5mSnYfDhQ2J6vXTjdQBGp65sQM8z735WZAs0Xm6QKlcxAHqFTWw10vHx04vmW9YVOAiXopdftZTVcf6Jf0udBmCYrVm8DDCWvPiGxRfNsGbdLh3AiIfwMJzBcZaxQoHC8kdH9rWEUQxPb4bsd2DJaBWjVaFCrLT4U226"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 3, "cityCodeChar2", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 4, "cityCodeChar2", "1l80eDaA2ft5FXKR2X039OtLo8VERdLO5"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 5, "cityCode", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 6, "cityCode", 6));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 7, "cityDescription", "oO4qvv7mU2HBRfrAJIspzjmTsitQuWuaXbbkrybLhOCuyfyVSEsW1BeCWlUcBxST1ihbfeuGTkISkPLfYPWkXBBwUkj0cHuYvp9zXBuGktqk1WHjl7PRn9TFctxHh72O9"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 8, "cityFlag", "cGmfdHbH3NIMmX5AkFwHzFsvYb2Zpkv6wLDzeEkjsp7wNQiIGHaQhjtdRBm4HqdUADCKx47A7fv7sDYp3gTI1D2rkwIOMHORsEq9RGFNv7do5hdz7qBLoW2A4Lnnw6wZV"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 9, "cityLatitude", 18));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 10, "cityLongitude", 12));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                City city = createCity(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = city.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        field.setAccessible(true);
                        field.set(city, null);
                        validateCity(contraints, city);
                        failureCount++;
                        break;
                    case 2:
                        city.setCityName(contraints.getNegativeValue().toString());
                        validateCity(contraints, city);
                        failureCount++;
                        break;
                    case 3:
                        field.setAccessible(true);
                        field.set(city, null);
                        validateCity(contraints, city);
                        failureCount++;
                        break;
                    case 4:
                        city.setCityCodeChar2(contraints.getNegativeValue().toString());
                        validateCity(contraints, city);
                        failureCount++;
                        break;
                    case 5:
                        field.setAccessible(true);
                        field.set(city, null);
                        validateCity(contraints, city);
                        failureCount++;
                        break;
                    case 6:
                        city.setCityCode(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateCity(contraints, city);
                        failureCount++;
                        break;
                    case 7:
                        city.setCityDescription(contraints.getNegativeValue().toString());
                        validateCity(contraints, city);
                        failureCount++;
                        break;
                    case 8:
                        city.setCityFlag(contraints.getNegativeValue().toString());
                        validateCity(contraints, city);
                        failureCount++;
                        break;
                    case 9:
                        city.setCityLatitude(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateCity(contraints, city);
                        failureCount++;
                        break;
                    case 10:
                        city.setCityLongitude(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateCity(contraints, city);
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
