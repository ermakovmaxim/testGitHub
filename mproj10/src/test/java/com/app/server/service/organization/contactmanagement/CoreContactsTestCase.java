package com.app.server.service.organization.contactmanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.organization.contactmanagement.CoreContactsRepository;
import com.app.shared.organization.contactmanagement.CoreContacts;
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
import com.app.shared.organization.contactmanagement.Title;
import com.app.server.repository.organization.contactmanagement.TitleRepository;
import com.app.shared.organization.contactmanagement.Gender;
import com.app.server.repository.organization.contactmanagement.GenderRepository;
import com.app.shared.organization.locationmanagement.Language;
import com.app.server.repository.organization.locationmanagement.LanguageRepository;
import com.app.shared.organization.locationmanagement.Timezone;
import com.app.server.repository.organization.locationmanagement.TimezoneRepository;
import com.app.shared.organization.locationmanagement.Address;
import com.app.server.repository.organization.locationmanagement.AddressRepository;
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
public class CoreContactsTestCase extends EntityTestCriteria {

    /**
     * CoreContactsRepository Variable
     */
    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

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

    private CoreContacts createCoreContacts(Boolean isSave) throws Exception {
        Title title = new Title();
        title.setTitles("ENP5j4rcSxzsf9ZXc4NtxPeXcstg27ZIACzYDCF9R7cc0iwFd6");
        Title TitleTest = new Title();
        if (isSave) {
            TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
        }
        Gender gender = new Gender();
        gender.setGender("gvjfuD0elRF0NKmMXn2MK8t8djSYJiR9x8vrCfN4dI00p8BpWn");
        Gender GenderTest = new Gender();
        if (isSave) {
            GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
        }
        Language language = new Language();
        language.setLanguageType("StcQeEuhRURfk8ccpu4hGgARqZTP4O8i");
        language.setAlpha2("IT");
        language.setLanguageIcon("0grDbo4tPlAh6x6MEml0JKh31VHur77XfyKP98bEpK4qYVEmW1");
        language.setAlpha4("az85");
        language.setLanguageDescription("79kKz2ySpkARYNwHhABnJ4UPakwGnlHldFl7kI5lFqpmbpYmkU");
        language.setLanguage("kdcDGeg4eOAMfqDsUzzNsGFMCioP0MmyR2CoJoF0nwAwwgeDIT");
        language.setAlpha3("S1p");
        language.setAlpha4parentid(2);
        Language LanguageTest = new Language();
        if (isSave) {
            LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
        }
        Timezone timezone = new Timezone();
        timezone.setGmtLabel("kKndyZ7wdAxaNNV6tSgbr8z41HhfTYg4eBuYSDS66fNgNLv64Z");
        timezone.setTimeZoneLabel("KgKNbgwxnYW2GiPvliS27TP86umkL0YJR3WmIkv2EqOo3E84Wt");
        timezone.setUtcdifference(8);
        timezone.setCountry("sEWuMANY9EooZjFcmXv9jyAh3Uq23Q1h3UlRwpywQ0FWm0qu8L");
        timezone.setCities("kKOteQPW8RhMPZWAKSjLszE5In9mt93dMEWV4wCfahz8klDpVi");
        CoreContacts corecontacts = new CoreContacts();
        corecontacts.setEmailId("XlZ3FoTwfrlBsXojrsB1OGbIgBGlygCpsEOX1bLjjg0zmP2bNR");
        corecontacts.setMiddleName("0qcFq8vbi4fv15oZiUlE2O3TjfKXRlZThibkNDscwUG3EZvMyZ");
        corecontacts.setNativeLastName("Sh5lPZtKZGn73UpEJQQ7Lr0VAP50pxWXhAzbrteN52FjzRUsT3");
        corecontacts.setFirstName("VVxzKsUnMPiMZLD7zx3RYNze8h5tCfthFRDgD2bs2Qqo2nBCro");
        corecontacts.setPhoneNumber("ICvI35eAxOVoIAHeFmap");
        corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
        corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
        corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
        corecontacts.setDateofbirth(new java.sql.Timestamp(1475492324584l));
        corecontacts.setLastName("PvvdbCbdxZtCvJzS5VyFpK7suWejg02Go4O4fqNVSNSVpVIhhH");
        corecontacts.setNativeFirstName("bNNRc3yrIMOYu9P2EzW60kMewR8BrGcKXWDs8Lb9e40HVMvgIb");
        corecontacts.setApproximateDOB(new java.sql.Timestamp(1475492324585l));
        corecontacts.setNativeMiddleName("PO0ZueeZxh583KDY86BwFUPtMqSdFYNua7e4OvmdfcOlYJYCA9");
        timezone.setTimeZoneId(null);
        corecontacts.setTimezone(isSave ? timezoneRepository.save(timezone) : timezone);
        if (isSave) {
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
        }
        corecontacts.setAge(103);
        corecontacts.setNativeTitle("lxWLVpRSSdAcdzJ3xLuvVyChyweMZOArWwVdpLrk0ylFq085BM");
        java.util.List<Address> listOfAddress = new java.util.ArrayList<Address>();
        Address address = new Address();
        AddressType addresstype = new AddressType();
        addresstype.setAddressTypeIcon("F2SQZQAF6hYpZlQaL5sEPRNr7xeyGHGq9CbbLVyq0YyMmVpPOI");
        addresstype.setAddressTypeDesc("tUOqwKi1dc68adwnfzjrQ36okKP56XsCGOTQWmkzaF92omTuLe");
        addresstype.setAddressType("aY0kS23EOmDjEWgySY8WQz5vDz0WAfHPCI4TaCppXDiGEFxyqe");
        AddressType AddressTypeTest = new AddressType();
        if (isSave) {
            AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
        }
        Country country = new Country();
        country.setCountryName("PsyJNVjuih1Kl5uewTpaAF0756gPTmkcLwaTj38GP7Ph6jDcpf");
        country.setCapitalLatitude(4);
        country.setCapitalLongitude(7);
        country.setCurrencyCode("Uyc");
        country.setCountryFlag("2MhGnvLRcQflJyZrZGCmy2IeaosdjTUuZw0m6lkZsrG3Bt9q65");
        country.setCountryCode1("2Hp");
        country.setCurrencyName("Mfn2Bdy3E9HzQR9vCWqfQeXU6DDr0LpZNasht1kSZALYnZd8jL");
        country.setIsoNumeric(967);
        country.setCurrencySymbol("SHDa9bWxTwxDUMyR9tnnZPaTU4nDEhKx");
        country.setCountryCode2("sDn");
        country.setCapital("DvhpSnAuOL4JMBfjAgkWRgxNKMq1UHyL");
        Country CountryTest = new Country();
        if (isSave) {
            CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
        }
        State state = new State();
        state.setStateCapital("WaEuAy8rLWy0h86uf9ZgdOlsbVBFvrKFzyKAU1ikAGyM2p7Bmy");
        state.setStateCode(1);
        state.setStateDescription("sNj1W7rgEczdSIWbyXqWpZd2oLjjcyDjk1eB9GxhWYU8Z9s7uD");
        state.setStateCapitalLongitude(6);
        state.setStateFlag("3mNK52Cb827gdSkweKuYNMWRBXFU1szGJ0XUDOa9lTiIzbuOdp");
        state.setStateName("uymazYvfeAODkuAoK0oz09lBTzSLGiiwgMqAiLAZrWlADe9BVr");
        state.setStateCodeChar2("ZmaZ6XOHl2dDduetFmamDlZWFdk5wXfO");
        state.setStateCapital("fvwixeM4QyNMX0p6sN7uWKqbg4PfM7l1PHgU199y7bmlqoIY7t");
        state.setStateCode(2);
        state.setStateDescription("oVTNr6DhJrDxeWjsCpeZ6A9HvI6J5rcO7t6NCsd5EeVhH7eRul");
        state.setStateCapitalLongitude(5);
        state.setStateFlag("UwsslF3H7GkxibcpEHvbDQe9e4mviG1lT5BWszKYBS6dqeQf3x");
        state.setStateName("4HszbYZYH0Wy9LQt4taN8eT2ylFKbbUizafPHRgGREeImHEgde");
        state.setStateCodeChar2("qfiyL1CHgiQ0JHQJRBMEgEwMLar87FAk");
        state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
        state.setStateCodeChar3("G5b0CgCzWxT2ANyQ7wvwR2dzFOj6F0bX");
        state.setStateCapitalLatitude(10);
        State StateTest = new State();
        if (isSave) {
            StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
        }
        City city = new City();
        city.setCityCode(3);
        city.setCityCode(2);
        city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
        city.setCityFlag("GcE9RkuIbsuo7iXVBc22Z2w6S3K9vQO9AyBQXdMOcU5BBBZvRa");
        city.setCityDescription("h4D11cjf6lFHreyiolIeSmMHiqen3EJbhtjf0ZhvktjOfUn8Et");
        city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
        city.setCityCodeChar2("NX6hb6D9WdGCgTmU0obrWvpwcNwWxJOs");
        city.setCityLatitude(2);
        city.setCityName("lw4inWvXheIAtuNPpGiQs32317ShnT17WReA4XInBEEMz6KDoE");
        city.setCityLongitude(6);
        City CityTest = new City();
        if (isSave) {
            CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
        }
        address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
        address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
        address.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
        address.setAddress2("vO9SsB3SymiB47QZqkEBJaP13JQUnvQWBsmgtzKLWruEvElx3W");
        address.setLatitude("Hj1B4Zz1S8Kb5mdLPi8b21Q9y9YQfx7IsdZDliM2bmQtfJGZ0f");
        address.setAddress3("5FfSf4QAt8me4XYV0lOV70QMe55oHydz3S9dnM6AIHjXxRGRug");
        address.setZipcode("brvxy8");
        address.setLongitude("B8cQRJvsc2vz83fnHIcy69iM8vlw1bjf1jqqBwQN3f6YG7dPLE");
        address.setCityId((java.lang.String) CityTest._getPrimarykey());
        address.setAddress1("lBOnAaiInNVKmiCdUQGyi1XBssmuYMhqsBv8MIFuLXI2obqtyi");
        address.setAddressLabel("QcQwmHmsqrf");
        listOfAddress.add(address);
        corecontacts.addAllAddress(listOfAddress);
        corecontacts.setEntityValidator(entityValidator);
        return corecontacts;
    }

    @Test
    public void test1Save() {
        try {
            CoreContacts corecontacts = createCoreContacts(true);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            corecontacts.isValid();
            corecontactsRepository.save(corecontacts);
            map.put("CoreContactsPrimaryKey", corecontacts._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private AddressRepository<Address> addressRepository;

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
            Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            CoreContacts corecontacts = corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
            corecontacts.setEmailId("u9Wfyy8Zlr7yYlPSk00jFOjGIU5wQP0uCyflovnyvsmYp8Bd8I");
            corecontacts.setMiddleName("SkQxEXHPz2YKzzp4zdriKySfk3h0s8FdatjyMYCA9qrYN2jNIZ");
            corecontacts.setNativeLastName("sDwwtGnfc3qSyCJXZx9MFmCjU0TUztlaKjWgsdzOPxJsiTxoU0");
            corecontacts.setFirstName("GG7wwxbwcPxUmk9X4M1P4aaRHzgKWFuqUPBzrBAkiNmxPN1UDZ");
            corecontacts.setPhoneNumber("eM6EDUMJrXwYpInAQMYr");
            corecontacts.setVersionId(1);
            corecontacts.setDateofbirth(new java.sql.Timestamp(1475492324914l));
            corecontacts.setLastName("Iqrr4m8a9cEZbL0mUpiL7Tz29t2chzFbvK5OgrMllr9bfvc3tM");
            corecontacts.setNativeFirstName("e0Jv4F3v8ekNkks6uzzeBL4dXg6aWdBxfJLHY7lk5h2usaWtvP");
            corecontacts.setApproximateDOB(new java.sql.Timestamp(1475492324934l));
            corecontacts.setNativeMiddleName("9W3WVeJKjWNBqQxILlFIkH0MrOF4jD3usyTI4ayaFxvNZD7QP8");
            corecontacts.setAge(49);
            corecontacts.setNativeTitle("C6xnUABFNxCbaP1yfXo0G85Ckdt2nDyLidZ8xEIeNTR4fQ0rVB");
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            corecontactsRepository.update(corecontacts);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBytitleId() {
        try {
            java.util.List<CoreContacts> listoftitleId = corecontactsRepository.findByTitleId((java.lang.String) map.get("TitlePrimaryKey"));
            if (listoftitleId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBygenderId() {
        try {
            java.util.List<CoreContacts> listofgenderId = corecontactsRepository.findByGenderId((java.lang.String) map.get("GenderPrimaryKey"));
            if (listofgenderId.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBynativeLanguageCode() {
        try {
            java.util.List<CoreContacts> listofnativeLanguageCode = corecontactsRepository.findByNativeLanguageCode((java.lang.String) map.get("LanguagePrimaryKey"));
            if (listofnativeLanguageCode.size() == 0) {
                Assert.fail("Query did not return any records.");
            }
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.delete((java.lang.String) map.get("CoreContactsPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey")); /* Deleting refrenced data */
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateCoreContacts(EntityTestCriteria contraints, CoreContacts corecontacts) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            corecontacts.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            corecontacts.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            corecontacts.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            corecontactsRepository.save(corecontacts);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 1, "firstName", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "firstName", "m09rIIdn4qK6eYgVv6sYjQhgk2yWr30Y3LqCG7G79d9oJTCWp9Up8vpsI0KFwYIsi2d8O5LbAuNozgKOGDBbPZfDs66ejfRsoViyOmHRPcIP0EI9xMCnoTvvcY1TocAQYTRfebYrD9fonszTvpOzRcZ0v06tFubRIyn0Nh07RRDc5kL3fJ0cPCjYsupYzIWz1OXFoo9fbNuvW4aN5mZFZXAJsiOfkmkCGbGjnKu3o8581N9Ca2vf34p6Cxa9uWNdb"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 3, "middleName", "p42pMGD5s1jHgQzSP8t2x1CJI4jpwbYzEMlW18vpgnv27HuLZrMfmz9FOzSFVhc4gFA9jSqPFjqlQBId0JhysomxzWh1rnGi73K4YLEsBDtfDQOOTpnygVBIFvrBG7cUv99koGc0DyYWpmQ9k0Vwm3jLxTdtypM73Gwyad1af7QY5C8euMUcyH6LVve9j3kJH5joXUzP3tdHRyiEahvmxFDe01y8d0gAu4JIb0d0pvSPPy60iyDe7TAl75xWnv60h"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 4, "lastName", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 5, "lastName", "lxFyXqE9rUd1YS4VlZgvsdziAkERCE6gIgg3fw7HKkTc7SBmGZDRYCB2wHz7VIZPPVFXIZyWpV3zYQSFzYXLw9chLxwmq2xVR5Rc0ZTkICvOOMwivDcC8qIrtlaEpZY9DFnMYcww2euItxYqJnW6mBk7Y9drZGxrbApxUUFzEiojcARq8gPcOKIMiCa7AnIi47yEoD8JkHAR2DcquFwNs1WdJcBMePHMu80M3uMDXD1vjhnEGWpRhKQaJyIwG4FUU"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 6, "nativeTitle", "80N3IhuOHghNadXFsGYA0wLE9lJoyMZ5tV5THEqLfW0kw5GlSfQR7hmsMzsnClboe"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 7, "nativeFirstName", "wprkcJ3QVa4aURxzScWeT9XmG8bCwxETlZJhxAPk4VUqN38s2R7zv80ybU6r01h7PryjMQo0li8h09A1hXORgK9Lb3XBuJuqG6sW2bUZw81T6dYelaes4DQpzuEc66lhShnhEaraJlfgkFvEyQpH2MkOkVj4pVXkLcP4l5fTr7eQkqK5gW0Hj8c16rEPiJXW5dM1Q8NCGlZ5Jn71OxfiEtEGI6vjG2ruvznuWfBSaPCNlwyBOJ0KyU1JuQZCY2gtZ"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 8, "nativeMiddleName", "4bLrE9exc9xzeDFPP09QBKhCgZXtMnct5E0iHOb9WKzbE5EM9TLJ0CYnEq0U3VoJ5Q9wpxC9rKkEQwkOdxQ3bYLfZ1IFAg8FgBMR7zlrGJw9mwVskWIzCSPD3xrbrVyuIjJcoVGUexpyNISWCWUcPWjcMLnNqF1q9ryDiTSHxvWGq7FfYAvb7dWYK8XhMUfHc75sZZc13FhcloIj8xVxt0NvP870aZxLZZlmqwLZpXtr7Fyca7hoq6jAIb04sfDIi"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 9, "nativeLastName", "6OArFpLZkrkN5iJdy6Zg2JJIgduEgSK9YvS91RwboLpRHxeGyCNd4es2DQET7QYESEKdheawDjjHXEC7psJCTfJoArIodSet4iiR33dT4BZcqz0YU2WnCNS3WOLDWcOrsNfOu20453ovLRyYyGIZNZTkZzlzxF6Iaza2fZm7Q1RirQeX8QIbJecu1GW57Q22yQNcqFVJzBLKu1vwOM7hMQqiHHPv7iNYJTyKSooIxjvPRMzt4UaQR6x9ZuZnpILKM"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 10, "age", 165));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 11, "emailId", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 12, "emailId", "p0di2f4YzFb78KE4QAYDAj6LvwYPn2w76fk4ZyB4vMa2Dq03iz9AdVgIdu9l2Kn1YTTnTsVMjryI85CkKIgw1jUs7Ycw8BMHaspC3DeEKmJoVfwwSAy7ZDwNJiQyaRu4l3CzhpWVSsT4PXujAs8rUxHWKMa70pE87wUJF43t470Gnx79yPGsJttRuV6KBZQVbeQBs45oGZOsWZBIYiMtHPMSrrC4ZzgFgQxHq9ocHPo8tzkeTFkonHj30jreXmYVY"));
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 13, "phoneNumber", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 14, "phoneNumber", "d2Qu3kxFQs4XtN2hjkXyr"));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                CoreContacts corecontacts = createCoreContacts(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = corecontacts.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        field.setAccessible(true);
                        field.set(corecontacts, null);
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 2:
                        corecontacts.setFirstName(contraints.getNegativeValue().toString());
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 3:
                        corecontacts.setMiddleName(contraints.getNegativeValue().toString());
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 4:
                        field.setAccessible(true);
                        field.set(corecontacts, null);
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 5:
                        corecontacts.setLastName(contraints.getNegativeValue().toString());
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 6:
                        corecontacts.setNativeTitle(contraints.getNegativeValue().toString());
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 7:
                        corecontacts.setNativeFirstName(contraints.getNegativeValue().toString());
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 8:
                        corecontacts.setNativeMiddleName(contraints.getNegativeValue().toString());
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 9:
                        corecontacts.setNativeLastName(contraints.getNegativeValue().toString());
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 10:
                        corecontacts.setAge(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 11:
                        field.setAccessible(true);
                        field.set(corecontacts, null);
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 12:
                        corecontacts.setEmailId(contraints.getNegativeValue().toString());
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 13:
                        field.setAccessible(true);
                        field.set(corecontacts, null);
                        validateCoreContacts(contraints, corecontacts);
                        failureCount++;
                        break;
                    case 14:
                        corecontacts.setPhoneNumber(contraints.getNegativeValue().toString());
                        validateCoreContacts(contraints, corecontacts);
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
