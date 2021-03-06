package com.app.server.repository.appbasicsetup.usermanagement;
import com.app.server.repository.core.CommonUtilRepositoryImpl;
import com.app.shared.appbasicsetup.usermanagement.UserAccessDomain;
import org.springframework.stereotype.Repository;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import com.app.config.annotation.Complexity;
import com.app.config.annotation.SourceCodeAuthorClass;
import com.athena.server.pluggable.utils.helper.ResourceFactoryManagerHelper;
import org.springframework.beans.factory.annotation.Autowired;
import com.spartan.pluggable.logger.api.LogManagerFactory;
import com.athena.server.pluggable.utils.AppLoggerConstant;
import com.spartan.pluggable.logger.api.LogManager;
import com.athena.server.pluggable.utils.helper.RuntimeLogInfoHelper;
import javax.persistence.EntityManager;
import com.athena.server.pluggable.interfaces.CommonEntityInterface;
import java.lang.Override;
import java.util.List;
import javax.persistence.Query;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Scope(value = "request", proxyMode = ScopedProxyMode.TARGET_CLASS)
@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "3", comments = "Repository for UserAccessDomain Master table Entity", complexity = Complexity.LOW)
public class UserAccessDomainRepositoryImpl extends CommonUtilRepositoryImpl implements UserAccessDomainRepository<UserAccessDomain> {

    @Autowired
    private ResourceFactoryManagerHelper emfResource;

    private LogManager Log = LogManagerFactory.getInstance(AppLoggerConstant.LOGGER_ID);

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    /**
     * Method for fetching list of entities
     * @throws java.lang.Exception
     */
    @Transactional
    @Override
    public List<UserAccessDomain> findAll() throws Exception {
        EntityManager emanager = emfResource.getResource();
        List<UserAccessDomain> query = emanager.createNamedQuery("UserAccessDomain.findAll").getResultList();
        Log.out.println("ABSUM324990200", runtimeLogInfoHelper.getRequestHeaderBean(), "UserAccessDomainRepositoryImpl", "findAll", "Total Records Fetched = " + query.size());
        return query;
    }

    /**
     * Retrive the total count of given named query for <UserAccessDomain> object.
     * @params jpqlQuery
     * @throws java.lang.Exception
     */
    @Transactional
    @Override
    public long getTotalPageCount(String jpqlQuery) throws Exception {
        long pageCount = super.getTotalPageCount(jpqlQuery);
        Log.out.println("ABSUM324990200", runtimeLogInfoHelper.getRequestHeaderBean(), "UserAccessDomainRepositoryImpl", "getTotalPageCount", "Total Records Size = " + pageCount);
        return pageCount;
    }

    /**
     * Returns the list of <CommonEntityInterface>
     * @return List<CommonEntityInterface>
     * @throws java.lang.Exception
     */
    @Transactional
    @Override
    public List<CommonEntityInterface> findPageWiseData(String jpqlQuery, int pageSize, int pageNo) throws Exception {
        List<CommonEntityInterface> listOfCountry = (List<CommonEntityInterface>) super.findPageWiseData(jpqlQuery, pageSize, pageNo);
        Log.out.println("ABSUM324990200", runtimeLogInfoHelper.getRequestHeaderBean(), "UserAccessDomainRepositoryImpl", "findPageWiseData", "Total Records Fetched = " + listOfCountry.size());
        return listOfCountry;
    }

    /**
     * Saves the new  <UserAccessDomain> object.
     * @return UserAccessDomain
     * @Params Object of UserAccessDomain
     * @throws java.lang.Exception
     */
    @Transactional
    @Override
    public UserAccessDomain save(UserAccessDomain entity) throws Exception {
        EntityManager emanager = emfResource.getResource();
        emanager.persist(entity);
        Log.out.println("ABSUM321990200", runtimeLogInfoHelper.getRequestHeaderBean(), "UserAccessDomainRepositoryImpl", "save", entity);
        return entity;
    }

    /**
     * Saves the list of new <UserAccessDomain> object.
     * @return java.util.List<UserAccessDomain>
     * @Params list of UserAccessDomain
     * @throws java.lang.Exception
     */
    @Transactional
    @Override
    public List<UserAccessDomain> save(List<UserAccessDomain> entity) throws Exception {
        EntityManager emanager = emfResource.getResource();
        for (int i = 0; i < entity.size(); i++) {
            UserAccessDomain obj = entity.get(i);
            emanager.persist(obj);
        }
        Log.out.println("ABSUM321990200", runtimeLogInfoHelper.getRequestHeaderBean(), "UserAccessDomainRepositoryImpl", "saveAll", "Total Records saved = " + entity.size());
        return entity;
    }

    /**
     * Deletes the <UserAccessDomain> object.
     * @Params String id
     * @throws java.lang.Exception
     */
    @Transactional
    @Override
    public void delete(String id) throws Exception {
        EntityManager emanager = emfResource.getResource();
        UserAccessDomain object = emanager.find(com.app.shared.appbasicsetup.usermanagement.UserAccessDomain.class, id);
        emanager.remove(object);
        Log.out.println("ABSUM328990200", runtimeLogInfoHelper.getRequestHeaderBean(), "UserAccessDomainRepositoryImpl", "delete", "Record Deleted");
    }

    /**
     * Updates the <UserAccessDomain> object.
     * @Params Object of UserAccessDomain
     * @throws java.lang.Exception
     */
    @Transactional
    @Override
    public void update(UserAccessDomain entity) throws Exception {
        javax.persistence.EntityManager emanager = emfResource.getResource();
        emanager.merge(entity);
        Log.out.println("ABSUM322990200", runtimeLogInfoHelper.getRequestHeaderBean(), "UserAccessDomainRepositoryImpl", "update", entity);
    }

    /**
     * Updates the list of <UserAccessDomain> object.
     * @Params list of UserAccessDomain
     * @throws java.lang.Exception
     */
    @Transactional
    @Override
    public void update(List<UserAccessDomain> entity) throws Exception {
        EntityManager emanager = emfResource.getResource();
        for (int i = 0; i < entity.size(); i++) {
            UserAccessDomain obj = entity.get(i);
            emanager.merge(obj);
        }
        Log.out.println("ABSUM322990200", runtimeLogInfoHelper.getRequestHeaderBean(), "UserAccessDomainRepositoryImpl", "updateAll", "Total Records updated = " + entity.size());
    }

    /**
     * Return UserAccessDomain object by filtering on refernce key <userAccessDomainId>
     * @return UserAccessDomain
     * @Params userAccessDomainId of type String
     * @throws java.lang.Exception
     */
    @Transactional
    public UserAccessDomain findById(String userAccessDomainId) throws Exception {
        EntityManager emanager = emfResource.getResource();
        Query query = emanager.createNamedQuery("UserAccessDomain.findById");
        query.setParameter("userAccessDomainId", userAccessDomainId);
        UserAccessDomain listOfUserAccessDomain = (UserAccessDomain) query.getSingleResult();
        Log.out.println("ABSUM324990200", runtimeLogInfoHelper.getRequestHeaderBean(), "UserAccessDomainRepositoryImpl", "findById", "Total Records Fetched = " + listOfUserAccessDomain);
        return listOfUserAccessDomain;
    }
}
