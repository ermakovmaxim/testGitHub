package com.app.server.service.organization.locationmanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.organization.locationmanagement.AddressRepository;
import com.app.shared.organization.locationmanagement.Address;
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
import com.app.shared.organization.locationmanagement.AddressType;
import com.app.server.repository.organization.locationmanagement.AddressTypeRepository;
import com.app.shared.organization.locationmanagement.Country;
import com.app.server.repository.organization.locationmanagement.CountryRepository;
import com.app.shared.organization.locationmanagement.State;
import com.app.server.repository.organization.locationmanagement.StateRepository;
import com.app.shared.organization.locationmanagement.City;
import com.app.server.repository.organization.locationmanagement.CityRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = { com.app.config.JPAConfig.class, com.app.config.WebConfigExtended.class })
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class AddressTestCase extends EntityTestCriteria {

    /**
     * AddressRepository Variable
     */
    @Autowired
    private AddressRepository<Address> addressRepository;

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

    private Address createAddress(Boolean isSave) throws Exception {
        AddressType addresstype = new AddressType();
        addresstype.setAddressTypeIcon("CEn03ZbUpWTNTOOz1Q7arm3u7RYOzvQ6JHjElcFW438M6mHRpy");
        addresstype.setAddressTypeDesc("oZ6Lp6vU8cpdTxsILquvPFWZXf4WxkdhwUFtQdznml2RkZDjcn");
        addresstype.setAddressType("1JT3andyEwnLzS2tZaCjCPPGTqkWEwiCJhQOhrW4MEyaiSGX4H");
        AddressType AddressTypeTest = new AddressType();
        if (isSave) {
            AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
        }
        Country country = new Country();
        country.setCountryName("1O4JRqEAiFVkThwIbMl70kxPOB09ncAj5qV5pesRIT6Fx0yTS3");
        country.setCapitalLatitude(11);
        country.setCapitalLongitude(7);
        country.setCurrencyCode("W2W");
        country.setCountryFlag("v9iRFEVC3HYkjqrYlfV4mICVo0Shb11Fw4x7EfLQJYqoDyayGi");
        country.setCountryCode1("PuJ");
        country.setCurrencyName("LeRGwGge6ZqEVwHVZcNZTWjuBVUZpSZFA5dthXqcy4AhG6vm7J");
        country.setIsoNumeric(871);
        country.setCurrencySymbol("kwZYcgv6vHj0eIg2iRjH3VwuT5C2hF54");
        country.setCountryCode2("KNt");
        country.setCapital("fvR26WazOoSepxl8X7Tsa6WUOWSxD1Rs");
        Country CountryTest = new Country();
        if (isSave) {
            CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
        }
        State state = new State();
        state.setStateCapital("xynDoLvlWrVfCvtcF7m7fEIScMx4rwxa4CMt0XCj8bXppm5Cox");
        state.setStateCode(2);
        state.setStateDescription("g525uM1DktDIOiJGHMcrM4VegtcHqPnvgG1c33f9SiuV1mFjG6");
        state.setStateCapitalLongitude(4);
        state.setStateFlag("B7YkB9cMHfGhhvWvY8GZgT5Gmo1yGnyUKmXbHM8kJuF6FMr9Sl");
        state.setStateName("9WP7qaRYMaaTlqTikxF9rUJ1iyMOVkmkL8kDX9MfPWEwoo9sYq");
        state.setStateCodeChar2("XRl2yrC9PhBLsaChbai6paSvg4Vs9DIu");
        state.setStateCapital("AMpb8d4OvqDJ0tHDSgacLw0d3WUBJaFlDWd1XNJlx7V5ZGGV1S");
        state.setStateCode(2);
        state.setStateDescription("fVhMtjFlp3VkeEsAxelgxag3PCWukjmSK21sI0mcd7sRgvlqQn");
        state.setStateCapitalLongitude(4);
        state.setStateFlag("pakVo0zbrzfz84uoypMN7rDYFaAYhgESomxcruDo9yXo3nd06F");
        state.setStateName("qY2MFh4aW1YjYkRz6CmvTQtk3VFuINUNZHQCnyPVEctxOTRVhN");
        state.setStateCodeChar2("B7pI9bu0B1u5GGWx8DEEVltaUU8LwsZ5");
        state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
        state.setStateCodeChar3("gH79FmhIVsbBj2qtDvvz9HXVVM6Rm4MQ");
        state.setStateCapitalLatitude(10);
        State StateTest = new State();
        if (isSave) {
            StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
        }
        City city = new City();
        city.setCityCode(2);
        city.setCityCode(3);
        city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
        city.setCityFlag("5H13lmMxst7xXjiUy6Whn6NPxh59IjOH3bfB7UsJKsEwFqsiDF");
        city.setCityDescription("QHGjA6OzDgEBl2onBQewXnenmP43S01nFNYNnMdlqucnGTVv9y");
        city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
        city.setCityCodeChar2("2gsx47jhmBlWac9w7I9pIRUnkGyve5Px");
        city.setCityLatitude(1);
        city.setCityName("dnDBOq7imdh6XGJs3e2WKttLGdytudwntawhhId8HspnWrpm2W");
        city.setCityLongitude(10);
        City CityTest = new City();
        if (isSave) {
            CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
        }
        Address address = new Address();
        address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
        address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
        address.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
        address.setAddress2("CUFwGQ3z3PnN2Rq00OAZyNJxvXQFPNr2L0TPfi3HZgm1p7Tv6i");
        address.setLatitude("KtOJsKJMQyO96uV4Gh8PkO1FOX1sucnXeIJ12RvcYU04bKDbWz");
        address.setAddress3("6dk5HQuPo4kcPvIosvuuFVkQKALwG4s6m4H6ryNw0jFbGXdYav");
        address.setZipcode("OmgZN3");
        address.setLongitude("wjYQxJ8JcdKDfb1s8h4ZMABnWJL4uWd9obeuBSn7W7lOrsxK1s");
        address.setCityId((java.lang.String) CityTest._getPrimarykey());
        address.setAddress1("GKSheMQBrfnjoGQamfH9tXPgOUDSb78CjQnAkEjfTOsGZACmKQ");
        address.setAddressLabel("QadIdaUj9hI");
        address.setEntityValidator(entityValidator);
        return address;
    }

    @Test
    public void test1Save() {
        try {
            Address address = createAddress(true);
            address.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            address.isValid();
            addressRepository.save(address);
            map.put("AddressPrimaryKey", address._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Test
    public void test2Update() {
        try {
            Assert.assertNotNull(map.get("AddressPrimaryKey"));
            Address address = addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
            address.setVersionId(1);
            address.setAddress2("59LTbmG9yZQWdSSVyV0IWBNmLcnqpmYNkT6wJ4clBDyVLCpaIj");
            address.setLatitude("vTFwILCqZeJRPi4sT2Xm09OBcvNRdCoB8MkCXIKP1K6YMlxUlP");
            address.setAddress3("av8hXk7OJbuQJXUvwzInncHEXmkxKtmlk2pNUev8tsxAOWyibV");
            address.setZipcode("O3jo5s");
            address.setLongitude("0Jz0NUSzWoUGXC7QoZC8e8gGMN2If36uL2NATXCf5E7dcWvT3C");
            address.setAddress1("hFBw5g8Dk7fn1xtEcKU5XMDmTMt4zDVT4xM6kYGtPHXimKDa4V");
            address.setAddressLabel("uEjxDVoJAWO");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            addressRepository.update(address);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByaddressTypeId() {
        try {
            java.util.List<Address> listofaddressTypeId = addressRepository.findByAddressTypeId((java.lang.String) map.get("AddressTypePrimaryKey"));
            if (listofaddressTypeId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Address> listofcountryId = addressRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountryId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBystateId() {
        try {
            java.util.List<Address> listofstateId = addressRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
            if (listofstateId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycityId() {
        try {
            java.util.List<Address> listofcityId = addressRepository.findByCityId((java.lang.String) map.get("CityPrimaryKey"));
            if (listofcityId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.delete((java.lang.String) map.get("AddressPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateAddress(EntityTestCriteria contraints, Address address) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            address.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            address.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            address.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            addressRepository.save(address);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 1, "addressLabel", "PNDrIiZIL5kG"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "address1", "jkNpsiBgh05J4itb30i9eXsVbFiYfBtJ0SwiJfiiO4SsjEVMOH3c6ztit"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 3, "address2", "uJ5N8KP7D0a3MMCHc7pfarmFVxPg48M9az7Gzv1biHWKMOAkge5r3aIKp"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 4, "address3", "fwsqolAsvfq8hZrNIorC1Sa2z7CXiGLfWyeFNh4izuezSBIkH8d6BUUVa"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 5, "zipcode", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 6, "zipcode", "d2RJmlp"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 7, "latitude", "uIOHGbtkJwQu4b64omXuViXG9ivO01DaFowDMXPPBtA86r4JblyLFXa50f6qwYbuR"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 8, "longitude", "QCcQL2vD6lweWKZIcENST2wDDMKyJT3ENRX5hLqG1gZ3kUyDV1qyYu1EVlvlxW2Kp"));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                Address address = createAddress(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = address.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        address.setAddressLabel(contraints.getNegativeValue().toString());
                        validateAddress(contraints, address);
                        failureCount++;
                        break;
                    case 2:
                        address.setAddress1(contraints.getNegativeValue().toString());
                        validateAddress(contraints, address);
                        failureCount++;
                        break;
                    case 3:
                        address.setAddress2(contraints.getNegativeValue().toString());
                        validateAddress(contraints, address);
                        failureCount++;
                        break;
                    case 4:
                        address.setAddress3(contraints.getNegativeValue().toString());
                        validateAddress(contraints, address);
                        failureCount++;
                        break;
                    case 5:
                        field.setAccessible(true);
                        field.set(address, null);
                        validateAddress(contraints, address);
                        failureCount++;
                        break;
                    case 6:
                        address.setZipcode(contraints.getNegativeValue().toString());
                        validateAddress(contraints, address);
                        failureCount++;
                        break;
                    case 7:
                        address.setLatitude(contraints.getNegativeValue().toString());
                        validateAddress(contraints, address);
                        failureCount++;
                        break;
                    case 8:
                        address.setLongitude(contraints.getNegativeValue().toString());
                        validateAddress(contraints, address);
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
